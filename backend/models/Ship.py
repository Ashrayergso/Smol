```python
from django.db import models

class Ship(models.Model):
    name = models.CharField(max_length=200)
    capacity = models.IntegerField()
    sailing_schedule = models.ForeignKey('ShipSailingSchedule', on_delete=models.CASCADE)
    crew_allowance = models.ForeignKey('ShipCrewAllowance', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
```