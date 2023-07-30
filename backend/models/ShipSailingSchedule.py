```python
from django.db import models
from .Ship import Ship

class ShipSailingSchedule(models.Model):
    ship = models.ForeignKey(Ship, on_delete=models.CASCADE)
    departure_date = models.DateTimeField()
    arrival_date = models.DateTimeField()
    destination = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.ship.name} - {self.destination}"
```