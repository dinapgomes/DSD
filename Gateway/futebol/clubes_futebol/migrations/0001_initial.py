# Generated by Django 4.0.6 on 2023-01-17 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clube',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=20)),
                ('quantidade_jogadores', models.IntegerField()),
                ('criado_em', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
