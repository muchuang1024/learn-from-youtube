"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export function VideoAnalyzer() {
  const [videoUrl, setVideoUrl] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!videoUrl) {
      setError("请输入视频链接");
      return;
    }
    setIsLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoUrl }),
      });

      if (!response.ok) {
        throw new Error("网络响应错误");
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (error: any) {
      setError(error.message || "解析失败，请稍后重试");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            AI 视频解析
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            输入一个视频链接，让 AI 为您生成结构化的摘要和内容分析。
          </p>
        </div>
        <div className="mx-auto max-w-2xl space-y-6 py-12">
          <div className="flex w-full items-center space-x-2">
            <Input
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              disabled={isLoading}
            />
            <Button onClick={handleAnalyze} disabled={isLoading}>
              {isLoading ? "解析中..." : "解析视频"}
            </Button>
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          {analysis && (
            <Card>
              <CardHeader>
                <CardTitle>字幕内容</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md overflow-y-auto max-h-96">
                  {analysis.transcript}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
