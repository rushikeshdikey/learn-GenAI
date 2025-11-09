import { describe, it, expect } from "vitest";
import {
  analyzePost,
  generateComment,
  generateScratchpad,
} from "../comment-generator";

describe("analyzePost", () => {
  it("should identify product launch topic", () => {
    const content = "Excited to announce our new product launch!";
    const result = analyzePost(content);
    expect(result.topic).toBe("product_launch");
  });

  it("should identify achievement topic", () => {
    const content = "We reached a major milestone this quarter!";
    const result = analyzePost(content);
    expect(result.topic).toBe("achievement");
  });

  it("should identify insight topic", () => {
    const content = "Here are some key insights on the latest industry trends";
    const result = analyzePost(content);
    expect(result.topic).toBe("insight");
  });

  it("should identify hiring topic", () => {
    const content = "We are hiring talented engineers to join our team";
    const result = analyzePost(content);
    expect(result.topic).toBe("hiring");
  });

  it("should default to general topic", () => {
    const content = "Just sharing some thoughts today";
    const result = analyzePost(content);
    expect(result.topic).toBe("general");
  });

  it("should detect numbers in content", () => {
    const content = "We grew by 150% this year";
    const result = analyzePost(content);
    expect(result.hasNumbers).toBe(true);
  });

  it("should detect percentage in content", () => {
    const content = "Achieved 99.9% uptime";
    const result = analyzePost(content);
    expect(result.hasNumbers).toBe(true);
  });

  it("should detect future plans mentions", () => {
    const content = "Our roadmap for next quarter is exciting";
    const result = analyzePost(content);
    expect(result.mentionsNext).toBe(true);
  });

  it("should detect questions", () => {
    const content = "What do you think about this approach?";
    const result = analyzePost(content);
    expect(result.asksQuestion).toBe(true);
  });
});

describe("generateComment", () => {
  it("should generate professional comment for product launch", () => {
    const content = "Launching our new AI-powered platform today!";
    const comment = generateComment(content, "professional");
    expect(comment).toBe(
      "Impressive initiative. Interested to see how this reshapes the space and delivers measurable outcomes."
    );
  });

  it("should generate engaging comment for achievement", () => {
    const content = "Hit our revenue milestone ahead of schedule!";
    const comment = generateComment(content, "engaging");
    expect(comment).toBe(
      "Big win! What lesson from this push do you think mattered most for the outcome?"
    );
  });

  it("should generate supportive comment for insight", () => {
    const content = "Interesting trends emerging in the AI space";
    const comment = generateComment(content, "supportive");
    expect(comment).toBe(
      "Thoughtful take—thanks for advancing the conversation with substance."
    );
  });

  it("should generate insightful comment for hiring", () => {
    const content = "Expanding our team with senior engineers";
    const comment = generateComment(content, "insightful");
    expect(comment).toBe(
      "Talent strategy looks intentional—expect tighter cycle times and better throughput."
    );
  });

  it("should generate question-based comment for general topic", () => {
    const content = "Some thoughts on remote work culture";
    const comment = generateComment(content, "question-based");
    expect(comment).toBe(
      "What's the next logical step you're considering to extend this work?"
    );
  });

  it("should always return a non-empty comment", () => {
    const styles = [
      "professional",
      "engaging",
      "supportive",
      "insightful",
      "question-based",
    ] as const;
    const content = "Test content";

    styles.forEach((style) => {
      const comment = generateComment(content, style);
      expect(comment.length).toBeGreaterThan(0);
    });
  });
});

describe("generateScratchpad", () => {
  it("should generate scratchpad with all required sections", () => {
    const content = "Launching our new product with 200% growth potential!";
    const scratchpad = generateScratchpad(content, "professional");

    expect(scratchpad.length).toBeGreaterThan(0);
    expect(scratchpad.some((item) => item.includes("Main Topic"))).toBe(true);
    expect(scratchpad.some((item) => item.includes("Response Approach"))).toBe(
      true
    );
    expect(
      scratchpad.some((item) => item.includes("Style Implementation"))
    ).toBe(true);
    expect(scratchpad.some((item) => item.includes("Value Addition"))).toBe(
      true
    );
  });

  it("should include content signals when detected", () => {
    const content =
      "We achieved 150% growth and have exciting plans for next quarter!";
    const scratchpad = generateScratchpad(content, "engaging");

    const signalsItem = scratchpad.find((item) =>
      item.includes("Content Signals")
    );
    expect(signalsItem).toBeDefined();
    expect(signalsItem).toContain("quantifiable metrics");
    expect(signalsItem).toContain("future plans/roadmap");
  });

  it("should adapt scratchpad based on comment style", () => {
    const content = "Test content";

    const professionalScratchpad = generateScratchpad(content, "professional");
    const engagingScratchpad = generateScratchpad(content, "engaging");

    const profStyle = professionalScratchpad.find((item) =>
      item.includes("Style Implementation")
    );
    const engStyle = engagingScratchpad.find((item) =>
      item.includes("Style Implementation")
    );

    expect(profStyle).not.toBe(engStyle);
  });
});
