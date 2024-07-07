from django.db import models

# Create your models here.


class Univ(models.Model):
    uName = models.CharField(max_length=50)
    adminAcUsername = models.CharField(max_length=200)
    adminAcApiKey = models.CharField(max_length=200)

class Course(models.Model):
    userFirstName = models.CharField(max_length=40)
    username = models.CharField(max_length=40)
    isStudent = models.BooleanField()
    univ = models.ForeignKey(Univ, on_delete=models.CASCADE)
    learningMat = models.FileField(upload_to=None, max_length=254)

class user(models.Model):
    userFirstName = models.CharField(max_length=40)
    username = models.CharField(max_length=40)
    isStudent = models.BooleanField()
    univ = models.ForeignKey(Univ, on_delete=models.CASCADE)
    Courses = models.ManyToManyField(Course)

