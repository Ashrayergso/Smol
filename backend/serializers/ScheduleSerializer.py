
from rest_framework import serializers
from backend.models import Schedule

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'crew', 'ship', 'start_date', 'end_date']
