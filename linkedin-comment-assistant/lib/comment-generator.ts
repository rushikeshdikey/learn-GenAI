export type CommentStyle =
  | "professional"
  | "engaging"
  | "supportive"
  | "insightful"
  | "question-based";

export type PostTopic =
  | "product_launch"
  | "achievement"
  | "insight"
  | "hiring"
  | "general";

export interface PostAnalysis {
  topic: PostTopic;
  hasNumbers: boolean;
  mentionsNext: boolean;
  asksQuestion: boolean;
}

export function analyzePost(content: string): PostAnalysis {
  const lc = content.toLowerCase();
  const topic: PostTopic =
    lc.includes("launch") || lc.includes("introducing")
      ? "product_launch"
      : lc.includes("achievement") || lc.includes("milestone")
        ? "achievement"
        : lc.includes("insight") || lc.includes("trend")
          ? "insight"
          : lc.includes("hiring") || lc.includes("team")
            ? "hiring"
            : "general";

  // Extract simple signals for scratchpad
  const hasNumbers = /\b\d{1,3}(\.\d+)?%|\b\d{2,}\b/.test(content);
  const mentionsNext = /(roadmap|next|upcoming|pipeline)/i.test(content);
  const asksQuestion = /\?/g.test(content);

  return { topic, hasNumbers, mentionsNext, asksQuestion };
}

export function generateComment(content: string, style: CommentStyle): string {
  const { topic } = analyzePost(content);
  const s = style.toLowerCase() as CommentStyle;

  const byStyle: Record<CommentStyle, Record<PostTopic, string>> = {
    professional: {
      product_launch:
        "Impressive initiative. Interested to see how this reshapes the space and delivers measurable outcomes.",
      achievement:
        "Congratulations on the milestone—clear evidence of disciplined execution and strategic focus.",
      insight:
        "Well-framed analysis; the trend mapping aligns with what we're seeing across the industry.",
      hiring:
        "Great to see the team scaling with intent—signals strong momentum and clarity on priorities.",
      general:
        "Clear, well-structured perspective—useful for practitioners navigating this topic.",
    },
    engaging: {
      product_launch:
        "This looks like a real unlock—what early signals are you tracking to validate adoption?",
      achievement:
        "Big win! What lesson from this push do you think mattered most for the outcome?",
      insight:
        "Interesting angle—what's the implication you think most leaders are underestimating here?",
      hiring:
        "Exciting growth—what profiles are proving most impactful at this stage?",
      general:
        "Appreciate the perspective—curious which part sparked the most internal debate.",
    },
    supportive: {
      product_launch:
        "Exciting launch—wishing the team strong adoption and rapid learnings ahead!",
      achievement:
        "Well deserved—kudos to the team for staying focused and shipping with quality.",
      insight:
        "Thoughtful take—thanks for advancing the conversation with substance.",
      hiring:
        "Great opportunities here—cheering for the next wave of builders to join in.",
      general: "Love the momentum—keep going strong!",
    },
    insightful: {
      product_launch:
        "Smart positioning—maps well to the shift toward intelligent automation and measurable ROI.",
      achievement:
        "The compounding effect of disciplined execution is evident—great example for operators.",
      insight:
        "Good synthesis of signals—especially the second-order effects you highlighted.",
      hiring:
        "Talent strategy looks intentional—expect tighter cycle times and better throughput.",
      general:
        "Useful abstraction—helps operators make cleaner decisions under ambiguity.",
    },
    "question-based": {
      product_launch:
        "What were the toughest trade-offs in the build, and how will you validate them in the next sprint?",
      achievement:
        "Which decision proved most pivotal in reaching this milestone, and would you make it earlier next time?",
      insight:
        "How do you see this trend evolving over the next 12 months, and what's the leading indicator you'll watch?",
      hiring:
        "Which role will most move the needle in the next quarter, and why?",
      general:
        "What's the next logical step you're considering to extend this work?",
    },
  };

  return byStyle[s][topic];
}

export function generateScratchpad(
  content: string,
  style: CommentStyle
): string[] {
  const analysis = analyzePost(content);
  const scratchpad: string[] = [];

  // Main topic/theme
  const topicLabels: Record<PostTopic, string> = {
    product_launch: "Product Launch",
    achievement: "Achievement/Milestone",
    insight: "Industry Insight/Trend",
    hiring: "Hiring/Team Growth",
    general: "General Discussion",
  };
  scratchpad.push(`**Main Topic:** ${topicLabels[analysis.topic]}`);

  // Specific achievements/insights/questions mentioned
  const signals: string[] = [];
  if (analysis.hasNumbers) signals.push("quantifiable metrics");
  if (analysis.mentionsNext) signals.push("future plans/roadmap");
  if (analysis.asksQuestion) signals.push("asks questions to audience");

  if (signals.length > 0) {
    scratchpad.push(
      `**Content Signals:** ${signals.join(", ") || "no specific signals"}`
    );
  }

  // Recommended response type
  const responseTypes: Record<CommentStyle, string> = {
    professional: "Professional acknowledgment with industry context",
    engaging: "Curious question to drive conversation",
    supportive: "Encouraging and positive reinforcement",
    insightful: "Strategic observation with deeper context",
    "question-based": "Thought-provoking questions to explore further",
  };
  scratchpad.push(`**Response Approach:** ${responseTypes[style]}`);

  // Plan to incorporate requested style
  const stylePlans: Record<CommentStyle, string> = {
    professional:
      "Use measured language, reference industry standards, focus on outcomes",
    engaging: "Ask specific questions, show genuine curiosity, invite dialogue",
    supportive: "Express enthusiasm, acknowledge effort, offer encouragement",
    insightful:
      "Provide strategic context, highlight patterns, add perspective",
    "question-based":
      "Pose clarifying questions, explore implications, encourage reflection",
  };
  scratchpad.push(`**Style Implementation:** ${stylePlans[style]}`);

  // How the comment will add value
  const valueProps: Record<CommentStyle, string> = {
    professional: "Validates their work through professional peer recognition",
    engaging: "Deepens discussion and encourages the author to share more",
    supportive: "Builds morale and reinforces positive behavior",
    insightful: "Adds strategic dimension that readers can learn from",
    "question-based": "Prompts reflection and uncovers additional insights",
  };
  scratchpad.push(`**Value Addition:** ${valueProps[style]}`);

  return scratchpad;
}
