import librosa

audio_path = "balochi_audio.wav"
audio, sr = librosa.load(audio_path)

print("Sample Rate:", sr)
print("Audio Samples:", len(audio))