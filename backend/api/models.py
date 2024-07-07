from django.db import models

# Create your models here.


class University(models.Model):
    username = models.CharField(max_length=50)
    admin_username = models.CharField(max_length=50)
    admin_apikey = models.CharField(max_length=200)

class Course(models.Model):
    course_id = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    learning_materials = models.FileField(upload_to=None)

class User(models.Model):
    first_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50)
    is_student = models.BooleanField()
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, related_name='users')

