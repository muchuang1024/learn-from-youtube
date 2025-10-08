import { NextResponse } from 'next/server'

function extractVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regex)
  return match ? match[1] : null
}
// Step 1: Get transcript from YouTube video
async function getTranscript(videoUrl: string): Promise<string> {
  console.log(`Fetching transcript for video: ${videoUrl}`)
  const videoId = extractVideoId(videoUrl)
  if (!videoId) {
    throw new Error('Invalid YouTube URL provided.')
  }

  const response = await fetch(`http://127.0.0.1:5000/subtitles/?video_id=${videoId}`)
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to fetch subtitles from the external service. Status: ${response.status}, Body: ${errorText}`)
  }
  const data = await response.json()
  if (!data.transcript) {
    throw new Error('Transcript not found in the response from the external service.')
  }
  console.log('Transcript fetched successfully.')
  return data.transcript
}

export async function POST(request: Request) {
  try {
    const { videoUrl } = await request.json()
    console.log('Received analysis request for videoUrl:', videoUrl)
    if (!videoUrl) {
      return NextResponse.json({ error: 'A videoUrl is required' }, { status: 400 })
    }

    // Step 1: Get Transcript
    const transcript = await getTranscript(videoUrl)

    return NextResponse.json({ transcript })
  } catch (error: any) {
    console.error('An error occurred during the analysis process:', error)
    return NextResponse.json({ error: 'An error occurred during analysis.', details: error.message }, { status: 500 })
  }
}