# Step 1: send the conversation and available functions to the model
messages = [{"role": "system", "content": f"""Generate multiple-choice questions (MCQs) on the given paragraph and consider the following instructions {prompt}. Provide questions at different cognitive levels according to Bloom's Taxonomy. Include a variety of question types and encourage creativity in the question generation process. You may use the following example questions as a guide.For each question classify it as Easy,Medium or Hard.
	
1. Remember (recall facts and basic concepts): Use verbs like "list," "define," "name." 
   - Example Question: "[Question based on 'remember' level]" 
	 a) Option A
	 b) Option B
	 c) Option C 
	 d) Option D

	 Answer: C
	 
	 Level:Easy

2. Understand (explain ideas or concepts): Use verbs like "summarize," "describe," "interpret."
   - Example Question: "[Question based on 'understand' level]" 
	 a) Option A
	 b) Option B
	 c) Option C
	 d) Option D

	 
	 Answer: A
	 
	 Difficulty Level:Easy


3. Apply (use information in new situations): Use verbs like "use," "solve," "demonstrate."
   - Example Question: "[Question based on 'apply' level]" 
	 a) Option A
	 b) Option B
	 c) Option C 
	 d) Option D

	 Answer: D
	 
	 Difficulty Level:Medium


4. Analyze (draw connections among ideas): Use verbs like "classify," "compare," "contrast."
   - Example Question: "[Question based on 'analyze' level]"
	 a) Option A
	 b) Option B
	 c) Option C
	 d) Option D

	 Answer: B
	 
	Difficulty	Level:Hard


5. Evaluate (justify a stand or decision): Use verbs like "judge," "evaluate," "critique."
   - Example Question: "[Question based on 'evaluate' level]"
	 a) Option A
	 b) Option B
	 c) Option C
	 d) Option D


	 Answer: E
	 
	Difficulty Level:Medium

6. Create (produce new or original work): Use verbs like "design," "assemble," "construct."
   - Example Question: "[Question based on 'create' level]"


   
Ensure the questions and options are closely related to the content of the provided text and reflect the cognitive level specified for every question. Generate as many questions as possible from the given content, incorporating diverse question types and encouraging creativity in the process."""},{"role": "user", "content": paragraph}]
	tools = [
		{
			"type": "function",
			"function": {
			"name": "generateMCQs",
			"parameters": {
				"type": "object",
				"properties": {
					"topic": {
						"type": "string"
					},
					"questions": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"question": {
									"type": "string"
								},
								"options": {
									"type": "array",
									"items": {
										"type": "string"
									}
								},
								"answer": {
									"type": "string"
								},
								"question_level": {
									"type": "string",
									"enum": ["easy", "medium","hard"]
								},
								"question_type": {
									"type": "string",
									"enum": ["Remember", "Understand","Apply","Analyze","Evaluate","Create"]
								}
							},
							"required": ["question", "options", "answer","question_level","question_type"]
						}
					}
				},
				"required": ["topic", "questions"]
			}
		}
		}
	]
	response = client.chat.completions.create(
		model="gpt-4",
		messages=messages,
		tools=tools,
		tool_choice="required",	 # auto is default, but we'll be explicit
	)
	#print("response------------",response)
	response_message = response.choices[0].message
	tool_calls = response_message.tool_calls
	# Step 2: check if the model wanted to call a function
	if tool_calls:
		# Step 3: call the function
		# Note: the JSON response may not always be valid; be sure to handle errors
		available_functions = {
			"generateMCQs": generateMCQs,
		}  # only one function in this example, but you can have multiple
		messages.append(response_message)  # extend conversation with assistant's reply
		# Step 4: send the info for each function call and function response to the model
		#print("tool_calls-----------------",tool_calls)
		if(1):
			function_name = tool_calls[0].function.name
			function_to_call = available_functions[function_name]
			function_args = json.loads(tool_calls[0].function.arguments)
			function_response = function_to_call(
				questions=function_args.get("questions"),
				topic=function_args.get("topic"),
			)
			return function_response
			