from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def getData():
    
    context = {
        "chapters": [
  { title: "Chapter 8: Objects and Classes" },
  { title: "Chapter 9: Strings" },
  { title: "Chapter 10: Thinking In Objects" },
  { title: "Chapter 11: Inheritance and Polymorphism" },
  { title: "Chapter 14: Text I/O" },
  { title: "Chapter 15: Abstract Classes and Interfaces" },
  { title: "Chapter 16: Event Driven Programming" },
  { title: "Chapter 21: Generics" },
]
    }
    return JsonResponse(request, context)