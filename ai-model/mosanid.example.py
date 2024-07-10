from dotenv import load_dotenv; load_dotenv()
from mosanidai.app import App
from sys import stdout
from time import sleep


app = App()
# app.add('/docs/relations.pdf')

def generate_questions(
    num_questions: int,
    topic: str,
):
    in_query = f"""Create {num_questions} quiz questions with 4 choices(a,b,c,d) and answer about {topic},avoid markup format,MUST have one answser,if you dont know reply Sorry,I don't know"""
    response = app.query(input_query=in_query)
    return response


def stream_to_console(message: str):
    for char in message:
        sleep(0.01)
        stdout.write(char)
        stdout.flush()

def print_message(response: str):
    if app.llm.config.stream:
        stream_to_console(response)
    else:
        print(response)
    
# while True:
#     print()
#     topic = input(">> ")

#     if topic == "exit":
#         break
#     if topic == "":
#         continue

#     q_count = 5
#     for index in range(q_count):
#         question_count = q_count - index
#         response = generate_questions(question_count, topic)
#         if "Sorry" in response:
#             print_message(
#                 f"Failed to generate {question_count} questions about {topic}!"
#             )
#             print()
#             continue
#         else:
#             print_message(response)
#             break

from mosanidai.prompt import prompts
print(app.query(prompts['mcq'].format(topic="reflexive relation", number_of_questions=3)), citations=True)
