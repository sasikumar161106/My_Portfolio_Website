// Test Script

async function test() {
  const apiKey = "sk_7afc032f45706878157b0cc5da744eeff6a2abada4aae153";
  const voiceId = "pNInz6obpgDQGcFmaJgB";

  console.log("Testing ElevenLabs API...");
  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": apiKey
      },
      body: JSON.stringify({
        text: "Hello, this is a test.",
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      console.log("FAILED!", response.status, await response.text());
    } else {
      console.log("SUCCESS! Audio size:", (await response.arrayBuffer()).byteLength);
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
test();
