# This file kickstarts all IoT nodes in the house

import subprocess

files = ["movementSensor.py", "smokeSensor.py", "dataTransmitter.py"]

script = 'python3 '+' & python3 '.join(files)

print("Running script: "+script)

subprocess.run(script, shell=True)