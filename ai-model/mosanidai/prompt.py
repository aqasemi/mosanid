from enum import Enum

class QuestionType(Enum):
    YES_NO = 1
    MULTIPLE_CHOICE = 2
    OPEN_ENDED = 3


class Prompt:   
    def __init__(self, prompt: str, question_type: QuestionType):
        self.prompt = prompt
        self.question_type = question_type

    def get_prompt(self):
        return self.prompt

    def get_question_type(self):
        return self.question_type

    def __str__(self):
        return f"Prompt: {self.prompt[:40] + '...' * bool(self.prompt[40:])}, Question Type: {self.question_type}"


class PromptFactory:
    @staticmethod
    def create_prompt(question_type):
        if question_type == QuestionType.YES_NO:
            return Prompt("Create a quiz of yes or no questions with {number_of_questions} questions. The topic of the quiz should be about {topic}.", QuestionType.YES_NO)
        elif question_type == QuestionType.MULTIPLE_CHOICE:
            return Prompt("Create a quiz of multiple choice questions with {number_of_questions} questions and 4 different choices (a,b,c,d) for each question. DO NOT duplicate choices within a questions. Insert the word 'Correct:' before the correct answer in its original spot. Do use lower letters unless unless it's an acronym. The quizz should be about the following topic {topic}.", QuestionType.MULTIPLE_CHOICE)
        elif question_type == QuestionType.OPEN_ENDED:
            return Prompt("Create {number_of_questions} different questions for a quiz. Only generate the list of questions, not the quiz itself. The questions must be separated with this character: # For example: a question?#another question?#a new question? The quiz questions should be about the following text: {topic}. Remember to separate de questions with this character: #", QuestionType.OPEN_ENDED)
        else:
            return None
        

prompts = {
    "mcq": """
    You are a subject matter expert on the topic: {topic}

    Follow the instructions to create a quiz question:
    1. Generate a question based on the topic provided and context as key "question"
    2. Provide {number_of_questions} multiple choice answers to the question as a list of key-value pairs "choices"
    3. Provide the correct answer for the question from the list of answers as key "answer"
    4. Provide an explanation as to why the answer is correct as key "explanation"

    Your response must be in JSON format with exactly the following structure, and do not add any extra text such as "```json" at the beginning or end of the structure.
    Example format:
    {{
        "question": "<question>",
        "choices": [
            {{"key": "A", "value": "<choice>"}},
            {{"key": "B", "value": "<choice>"}},
            {{"key": "C", "value": "<choice>"}},
            {{"key": "D", "value": "<choice>"}}
        ],
        "answer": "<answer key from choices list>",
        "explanation": "<explanation as to why the answer is correct>"
    }}

    Context: {context}""",
    
}