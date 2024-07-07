from django.db import models

# Create your models here.


class University(models.Model):
    username = models.CharField()
    admin_username = models.CharField()
    admin_apikey = models.CharField()

class Course(models.Model):
    course_id = models.CharField()
    name = models.CharField()
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    learning_materials = models.FileField(upload_to=None)

class User(models.Model):
    first_name = models.CharField()
    username = models.CharField()
    is_student = models.BooleanField()
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    courses = models.ManyToManyField(Course, related_name='users')

