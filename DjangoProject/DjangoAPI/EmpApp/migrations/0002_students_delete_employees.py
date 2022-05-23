# Generated by Django 4.0.4 on 2022-05-23 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmpApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('StudentId', models.AutoField(primary_key=True, serialize=False)),
                ('StudentName', models.CharField(max_length=100)),
                ('Department', models.CharField(max_length=100)),
                ('DateOfBirth', models.DateField()),
                ('PhotoFileName', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Employees',
        ),
    ]
