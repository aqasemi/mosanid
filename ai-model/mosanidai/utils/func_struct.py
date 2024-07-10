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
						"required": ["question", "options", "answer", "question_level", "question_type"]
					}
				}
			},
			"required": ["topic", "questions"]
		}
	}
	}
]
			