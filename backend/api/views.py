from django.shortcuts import render
from django.http import JsonResponse
from 


def get_chapters(request):
    context = {
        "chapters": [
            { "title": "Chapter 8: Objects and Classes" },
            { "title": "Chapter 9: Strings" },
            { "title": "Chapter 10: Thinking In Objects" },
            { "title": "Chapter 11: Inheritance and Polymorphism" },
            { "title": "Chapter 14: Text I/O" },
            { "title": "Chapter 15: Abstract Classes and Interfaces" },
            { "title": "Chapter 16: Event Driven Programming" },
            { "title": "Chapter 21: Generics" },]
    }

    return JsonResponse(context)


def get_students(request):
    context = {
    "studentData" : [
  {
    "id":1,
    "name":"Abdullah Almutairi",
    "duration":"1 min",
    "date":"Jun 25, 2024",
    "status":"Completed",
    "progress":100
  },
  {
    "id":2,
    "name":"Abdulaziz Jazzar",
    "duration":"2 min",
    "date":"Jun 25, 2024",
    "status":"Delayed",
    "progress":35
  },
  {
    "id":3,
    "name":"Mohammed Alharthi",
    "duration":"55 sec",
    "date":"Jun 25, 2024",
    "status":"Completed",
    "progress":68
  },
  {
    "id":4,
    "name":"Khalid Alzahrani",
    "duration":"3 min",
    "date":"Jun 25, 2024",
    "status":"Completed",
    "progress":100
  },
  {
    "id":5,
    "name":"Salem Ahmed",
    "duration":"1 min",
    "date":"Jun 25, 2024",
    "status":"Average",
    "progress":50
  },
  {
    "id":6,
    "name":"Saleh Al-Qahtani",
    "duration":"4 min",
    "date":"Jun 25, 2024",
    "status":"Completed",
    "progress":100
  },
  {
    "id":6,
    "name":"Saleh Al-Qahtani",
    "duration":"4 min",
    "date":"Jun 25, 2024",
    "status":"Completed",
    "progress":100
  },
  {
    "id":7,
    "name":"Waleed Hamed",
    "duration":"1 min",
    "date":"Jun 25, 2024",
    "status":"Ongoing",
    "progress":67
  }
]

    }

    return JsonResponse(context)


def get_session(request):
    context ={ "sessions" : [
  {
    "title": 'Session 1: Review 2d Array',
    "questions": 10,
    "duration": '20 minutes',
    "score": 9,
  },
  {
    "title": 'Session 2: Passing to methods',
    "questions": 10,
    "duration": '20 minutes',
    "score": 9,
  },
  {
    "title": 'Session 3: Case Study',
    "questions": 10,
    "duration": '20 minutes',
    "score": 9,
  },]}

    return JsonResponse(context)


def get_transactions(request):
    context = {"transactions": [
  {
    "Questionnumber":"1",
    "AverageDuration":"1 min",
    "Accuracy":"40"
  },
  {
    "Questionnumber":"2",
    "AverageDuration":"12 min",
    "Accuracy":"10"
  },
  {
    "Questionnumber":"3",
    "AverageDuration":"10 min",
    "Accuracy":"28"
  },
  {
    "Questionnumber":"4",
    "AverageDuration":"21 min",
    "Accuracy":"50"
  },
  {
    "Questionnumber":"5",
    "AverageDuration":"1 min",
    "Accuracy":"40"
  },
  {
    "Questionnumber":"6",
    "AverageDuration":"12 min",
    "Accuracy":"10"
  },
  {
    "Questionnumber":"7",
    "AverageDuration":"10 min",
    "Accuracy":"28"
  },
  {
    "Questionnumber":"8",
    "AverageDuration":"21 min",
    "Accuracy":"50"
  },
  {
    "Questionnumber":"9",
    "AverageDuration":"12 min",
    "Accuracy":"10"
  },
  {
    "Questionnumber":"10",
    "AverageDuration":"10 min",
    "Accuracy":"28"
  }
    ]}

    return JsonResponse(context)