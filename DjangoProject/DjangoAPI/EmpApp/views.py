import imp
from operator import methodcaller
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

from EmpApp.models import Students,Departments
from EmpApp.serializers import DepartmentSerializer, StudentSerializer
from django.core.files.storage import default_storage
# Create your views here.
@csrf_exempt
def departmentApi(request,id=0):
    if request.method == 'GET':
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many= True)
        return JsonResponse(departments_serializer.data,safe=False)
    
    elif request.method == 'POST':
        department_data = JSONParser().parse(request)
        departments_serializer = DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added successfully!!", safe= False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        departments_serializer = DepartmentSerializer(department,data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Updated successfully!!", safe= False)
        return JsonResponse("Failed to Update", safe=False)

    elif request.method=='DELETE':
        department= Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted successfully!!", safe=False)


@csrf_exempt
def studentApi(request,id=0):
    if request.method == 'GET':
        students = Students.objects.all()
        students_serializer = StudentSerializer(students, many= True)
        return JsonResponse(students_serializer.data,safe=False)
    
    elif request.method == 'POST':
        student_data = JSONParser().parse(request)
        students_serializer = StudentSerializer(data=student_data)
        if students_serializer.is_valid():
            students_serializer.save()
            return JsonResponse("Added successfully!!", safe= False)
        return JsonResponse("Failed to Add", safe=False)

    elif request.method == 'PUT':
        student_data = JSONParser().parse(request)
        student = Students.objects.get(StudentId=student_data['StudentId'])
        students_serializer = StudentSerializer(student,data=student_data)
        if students_serializer.is_valid():
            students_serializer.save()
            return JsonResponse("Updated successfully!!", safe= False)
        return JsonResponse("Failed to Update", safe=False)

    elif request.method=='DELETE':
        student= Students.objects.get(StudentId=id)
        student.delete()
        return JsonResponse("Deleted successfully!!", safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)
