import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { transcript } = await req.json()

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript is required' }, { status: 400 })
    }

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
                        messages: [
                            {
                                role: 'system',
                                content: '你是一个优秀的视频内容总结助手。你的任务是把视频转录稿总结成清晰、易于阅读的中文摘要。请使用标题、要点和表情符号来美化格式。'
                            },
                            {
                                role: 'user',
                                content: `请根据以下视频转录稿，生成一份精炼的中文内容概要。请确保总结内容结构清晰，重点突出，并加入适当的 emoji 提升可读性。\n\n转录稿内容：\n${transcript}`
                            }
                        ]      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('OpenRouter API Error:', errorData)
      throw new Error(`Provider returned error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const summary = data.choices[0].message.content

    return NextResponse.json({ summary })
  } catch (error) {
    console.error('Error summarizing transcript:', error)
    return NextResponse.json({ error: 'Error summarizing transcript' }, { status: 500 })
  }
}
