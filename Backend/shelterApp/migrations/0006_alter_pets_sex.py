# Generated by Django 4.1.7 on 2023-02-19 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shelterApp', '0005_alter_pets_number_alter_pets_sex_alter_pets_state_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pets',
            name='sex',
            field=models.CharField(choices=[('Samiec', 'Samiec'), ('Samica', 'Samica')], max_length=6),
        ),
    ]
