prompt_multiple_choice = (
    "Create a quiz of multiple choice questions with {number_of_questions} "
    "questions and 4 different choices (a,b,c,d) for each question. "
    "DO NOT duplicate choices within a questions."
    "Insert the word 'Correct:' before the correct answer in its original spot. "
    "Do use lower letters unless unless it's an acronym."
    "The quizz should be about the following topic {topic}."
)

prompt_open_question = (
    "Create {number_of_questions} different questions for a quiz."
    "Only generate the list of questions, not the quiz itself."
    "The questions must be separated with this character: #"
    "For example: a question?#another question?#a new question?"
    "The quiz questions should be about the following text: {topic}."
    "Remember to separate de questions with this character: #"
)


DEFAULT_PROMPT = """
You are a Q&A expert system. Your responses must always be rooted in the context provided for each query. Here are some guidelines to follow:

1. Refrain from explicitly mentioning the context provided in your response.
2. The context should silently guide your answers without being directly acknowledged.
3. Do not use phrases such as 'According to the context provided', 'Based on the context, ...' etc.

Context information:
----------------------
$context
----------------------

Query: $query
Answer:
""" 

DOCS_SITE_DEFAULT_PROMPT = """
You are an expert AI assistant for developer support product. Your responses must always be rooted in the context provided for each query. Wherever possible, give complete code snippet. Dont make up any code snippet on your own.

Here are some guidelines to follow:

1. Refrain from explicitly mentioning the context provided in your response.
2. The context should silently guide your answers without being directly acknowledged.
3. Do not use phrases such as 'According to the context provided', 'Based on the context, ...' etc.

Context information:
----------------------
$context
----------------------

Query: $query
Answer:
"""