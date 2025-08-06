const LearningSkillCard = `
import React from "react";
import { Headphones, ArrowRight } from "lucide-react";
import { Badge } from "./Badge";
import Link from "next/link";
import { Button } from "./Button";

export default function LearningSkillCard() {
  const skill = {
    icon: Headphones,
    title: "Listening",
    description:
      "Improve comprehension with audio lessons, podcasts, and interactive exercises",
    level: "All Levels",
    lessons: 150,
    href: "#",
    color: "bg-blue-500/10 text-blue-600",
  };

  return (
    <div className="max-w-sm mx-auto border border-gray-200 rounded-lg p-4 shadow-sm group hover:shadow-lg transition-all duration-300">
      <div>
        <div className="flex items-center justify-between">
          <div
            className={\`w-12 h-12 rounded-lg \${skill.color} flex items-center justify-center\`}
          >
            <skill.icon className="h-6 w-6" />
          </div>
          <Badge color="gray">{skill.lessons} lessons</Badge>
        </div>
        <div className="text-xl">{skill.title}</div>
        <div className="text-gray-500">{skill.description}</div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <Badge color="black">{skill.level}</Badge>
          <Link href={skill.href}>
            <Button
              color="black"
              size="sm"
              className="flex group-hover:bg-primary group-hover:text-primary-foreground"
            >
              Start Learning
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
`;
export default LearningSkillCard;
