import paho.mqtt.client as mqtt


def on_message(client, userdata, message):
    print(message.payload.decode())
    # Publishing to datatransmitter
    client.publish("dt/smoke", "Smoke Detected!")


client = mqtt.Client()
client.on_message = on_message
client.connect("127.0.0.1", 1883, 60)

client.subscribe("safety/smoke", qos=1)  # Waiting on mock event

client.loop_forever()
