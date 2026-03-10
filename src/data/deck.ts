/**
 * SXSW talk: Coach, Not Shortcut — Teaching students to learn with AI
 */

export type SlideLayout = 'title' | 'section' | 'content' | 'bullet' | 'quote' | 'closing';

export interface Slide {
  id: string;
  layout: SlideLayout;
  /** Short headline for the slide (audience sees this) */
  title: string;
  /** Optional subtitle or single line */
  subtitle?: string;
  /** Bullet points — keep to 3–5, one line each (best practice) */
  bullets?: string[];
  /** Full script for this slide (presenter notes, left panel) */
  speakerNotes: string;
}

export interface Deck {
  title: string;
  subtitle?: string;
  slides: Slide[];
}

export const sampleDeck: Deck = {
  title: 'Coach, Not Shortcut',
  subtitle: 'SXSW · Teaching students to learn with AI',
  slides: [
    {
      id: '0',
      layout: 'title',
      title: 'Coach, Not Shortcut',
      subtitle: 'Elliott Hedman · AI for Learning',
      speakerNotes: "Thanks for being here. I'm going to tell you one story about one student, and use it to give you a framework you can use tomorrow.",
    },
    {
      id: '1',
      layout: 'title',
      title: 'Coach, Not Shortcut',
      subtitle: 'Teaching students to learn with AI',
      speakerNotes: "Quick show of hands. How many of you have heard a version of this sentence this year.\n\n\"AI is going to ruin learning.\"\n\nNow keep your hand up if you think there's something real underneath that fear.\n\nStudents are using AI already. The question is not whether they will. The question is whether they learn to use it in a way that builds thinking, or replaces thinking.\n\nI want to start with one student who made that problem extremely clear.",
    },
    {
      id: '2',
      layout: 'content',
      title: "Eddy's question",
      subtitle: '"Is my Adobe certification all I need?" · "Is this a smart next path?"',
      speakerNotes: "Eddy is sharp, motivated, proud. He told me:\n\n\"I'm Adobe certified. I'm not sure I need college. That's basically a degree.\"\n\nThat's not just a hot take. That's a real decision with real consequences.\n\nSo Eddy does what students do now. He asks AI.\n\nAnd here's the twist.\n\nThe outcome Eddy gets depends less on the tool, and more on how he asks.\n\nSame student. Same tool. Completely different results.\n\nBecause AI will often do something dangerous by accident. It will bless whatever premise you feed it.\n\nSo instead of arguing with Eddy, I tried to teach him a different skill:\n\nNot \"use AI.\"\n\nHow to ask in a way that produces learning and judgment.",
    },
    {
      id: '3',
      layout: 'quote',
      title: '"If we only ban AI, students only practice copying."',
      speakerNotes: "Here's what's hard inside schools.\n\nMany systems communicate, explicitly or implicitly: \"AI is bad. Don't use it.\"\n\nStudents hear that, then they use it quietly.\n\nAnd the only \"AI skill\" they practice is copying.\n\nSo we accidentally train a generation to use the most powerful learning tool ever invented in the least educational way possible.\n\nTeaching kids to learn with AI is more important than teaching any specific tool. Tools change. Judgment scales.\n\nAnd the adult world agrees. Companies are literally paying to teach their people how to do this responsibly. So our job is to make sure students don't learn AI the wrong way first.",
    },
    {
      id: '4',
      layout: 'bullet',
      title: 'Adults are being trained, because AI is now a job skill',
      bullets: [
        'Avg large-company training budget: $11.7M (2025)',
        'Avg spend: $874 per learner/year (2025)',
        'When AI training is offered, 77% of employees take it',
        'Bottom line: If adults need coaching to use AI well, kids do too.',
      ],
      speakerNotes: "Outside of schools, nobody is treating AI like a \"don't touch it\" problem. Companies are paying to teach their staff how to use it well.\n\nTraining Magazine reports that large companies average $11.7 million in annual training budgets, and about $874 per learner per year on training overall.\n\nAnd Gartner found that 77% of employees take AI training when it's offered.\n\nSo the adult world is saying: \"This is a literacy.\" My point is: students deserve the same guidance, but student-safe and learning-first.",
    },
    {
      id: '5',
      layout: 'bullet',
      title: 'The Prompt Pyramid',
      subtitle: 'Same AI. Different outcome.',
      bullets: [
        '1. Do it for me',
        '2. Bless my premise',
        '3. Point me at progress',
        '4. Teach me with reps',
        '5. Reflect and adapt',
      ],
      speakerNotes: "Here's the framework I use with Eddy and basically every student now. I call it the Prompt Pyramid.\n\nAs you go up the pyramid, the student contributes more cognition and the AI contributes more structure.\n\nLet's walk it.\n\nTier 1: Do it for me.\n\"Write it.\" \"Solve it.\" \"Give me the answer.\"\nThis replaces thinking.\n\nTier 2: Bless my premise.\nThis is the dangerous tier.\n\"Is my plan right?\" \"Is this enough?\" \"Should I do this?\"\nAI often answers in a confident, agreeable way, and it accidentally blesses an assumption that might be wrong.\n\nTier 3: Point me at progress.\n\"How do I get good at soccer?\" \"How do I become a better designer?\"\nThis is direction and strategy. Helpful, but still not learning unless we turn it into reps.\n\nTier 4: Teach me with reps.\n\"Quiz me.\" \"Train me.\" \"Give feedback as I try.\"\nNow the student is practicing, failing safely, and improving.\n\nTier 5: Reflect and adapt.\n\"What's working?\" \"What's not?\" \"What should we change?\"\nThis is the closed loop. The student builds judgment over time.\n\nHere's the point:\n\nMost school debates treat AI like one thing. But it's not one thing. It's a ladder.\n\nYour policy may be fixed. Your curriculum might be slow to change.\n\nBut you can teach students to move one tier up.",
    },
    {
      id: '6',
      layout: 'bullet',
      title: 'Eddy, Tier 2 vs Tier 5',
      bullets: [
        'Tier 2: "Is Adobe cert basically a degree?"',
        'Tier 5: "Coach my plan, test it, adjust it weekly."',
      ],
      speakerNotes: "Let me show you what changed for Eddy.\n\nTier 2 sounds like this:\n\n\"Is an Adobe certification basically a degree? Be honest.\"\n\nThat prompt invites the model to validate a conclusion. It's not testing the premise.\n\nThen we shifted Eddy up the pyramid.\n\nTier 5 sounded like this:\n\n\"Act like a career coach. Ask me 7 questions about my goals, my constraints, and what kind of life I want. Then compare three paths: college, work-first, and a hybrid. For each path, list what I would need to prove in my portfolio in 90 days. Give me a weekly plan and a rubric. Each week, I will report results and you will adjust the plan.\"\n\nThat one change does something huge.\n\nIt turns a conclusion into a test.\nIt turns anxiety into a plan.\nIt turns AI into coaching, not authority.\n\nAnd this is the part I care about most:\n\nEddy starts seeing options he didn't even know existed because the question becomes exploratory and iterative.\n\nNot \"tell me the answer.\"\n\nHelp me build a model of the world.",
    },
    {
      id: '7',
      layout: 'content',
      title: 'AI is an intern, not an oracle',
      subtitle: 'Fast. Useful. Not accountable.',
      speakerNotes: "Underneath Eddy's story is the real skill.\n\nNot prompting tricks. Judgment.\n\nAI is an intern, not an oracle.\n\nIt drafts. It brainstorms. It explains.\nBut it does not own truth, context, or consequences.\n\nYou do.\n\nSo I teach students a five-question truth filter:\n1. What assumptions is this making about me?\n2. What would make this wrong?\n3. What's the risk if I follow it?\n4. What would an experienced person say instead?\n5. What evidence would I need to confirm it?\n\nThat's how you stop AI from becoming a confidence machine for bad premises.",
    },
    {
      id: '8',
      layout: 'content',
      title: 'Dr. Philippa Hardman',
      subtitle: 'AI literacy = prompting + validation · Shift from detection to learning design',
      speakerNotes: "If you want to know where serious learning science thinkers are landing on this, one person worth paying attention to is Dr. Philippa Hardman.\n\nShe argues that education is at a decision point: AI will be used either way, and resisting it has costs, because learners will still use it but in uneven and often corrosive ways.\n\nHer framing is aligned with what we just saw in Eddy.\n\nStop obsessing over whether AI touched the work.\nStart teaching the skills that make AI use educational: prompting and validation.\n\nShe also proposes a \"Post-AI Learning Taxonomy\" that starts at understanding and moves toward applying, analysing, collaborating, creating, and disrupting. The theme is that we should prioritize higher-order performance in an AI world.\n\nThat's exactly what the Prompt Pyramid is doing at the student level.",
    },
    {
      id: '9',
      layout: 'content',
      title: 'Evidence, not hype',
      subtitle: 'AI tutor RCT (Harvard physics): More learning, less time, higher engagement',
      speakerNotes: "And there's proof this can work academically when AI interactions are designed around pedagogy.\n\nA peer-reviewed randomized controlled trial in an undergraduate physics course found students learned significantly more in less time with an AI tutor than in an active learning class, and reported higher engagement and motivation.\n\nThe same paper warns about the exact failure mode schools fear: unguided chatbot use can let learners complete work without engaging in critical thinking.\n\nSo the \"right answer\" isn't ban or chaos.\n\nIt's design. It's coaching. It's interaction patterns.",
    },
    {
      id: '10',
      layout: 'content',
      title: 'The skills employers pay for = the skills we should teach',
      subtitle: 'Employers pay for: Prompting for real work · Verification and evaluation · Using trusted sources · Workflow building · Governance, ethics, safety\n\nStudent-safe: "Coach me, don\'t do it" · "Be skeptical and specific" · "Use my notes, rubric, text" · "Break it into steps + check-ins" · "Privacy + integrity rules"',
      speakerNotes: "What employers are paying for isn't prompt hacks. It's the ability to learn, verify, iterate, and use tools responsibly. That's exactly what my next section is: a student version of that same skill stack.",
    },
    {
      id: '11',
      layout: 'bullet',
      title: 'Seven moves that raise a student one tier',
      bullets: [
        'Friction kills curiosity — voice input, more iteration',
        "No goal — \"Ask me questions to define what success looks like\"",
        'AI dumps — \"One question at a time. Wait for my answer. Then feedback.\"',
        "Permission to be messy — \"I'm sloppy. Prioritize speed and learning.\"",
        'Overly agreeable — \"Be honest, not nice. Give 3 concrete improvements.\"',
        "Reps not answers — \"Quiz me. Increase difficulty. Track what I miss.\"",
        'Reflection — \"What did I learn? What changed my mind? What next?\"',
      ],
      speakerNotes: "Now I want to give you the practical part, the student version of the same skills employers are paying for: prompting, verification, grounded thinking, and responsible use.\n\nThese are seven patterns I see constantly, and the move that raises a student up the pyramid.\n\n1. Friction kills curiosity — Students' thinking is faster than typing, so prompts get small and shallow. Fix: voice input. More iteration.\n\n2. They don't have a goal — \"Help me\" is not a goal. Fix prompt: \"Ask me questions to define what success looks like.\"\n\n3. AI teaching defaults to a huge dump — Fix prompt: \"One question at a time. Wait for my answer. Then feedback.\"\n\n4. They need permission to be messy — Fix prompt: \"I'm going to be sloppy. Prioritize speed and learning.\"\n\n5. AI is overly agreeable — This is where Tier 2 lives. Fix prompt: \"Be honest, not nice. Give 3 concrete improvements.\"\n\n6. They need reps, not answers — Fix prompt: \"Quiz me. Increase difficulty. Track what I miss.\"\n\n7. Reflection creates transfer — Fix prompt: \"What did I learn? What changed my mind? What will I do next time?\"\n\nIf you do just these, you move a student from shortcut behavior to coaching behavior.",
    },
    {
      id: '12',
      layout: 'bullet',
      title: 'Four teacher-safe activities (low risk, high learning)',
      bullets: [
        'Rubric mirror (Tier 4): "Score this using the rubric. Quote evidence. Highest leverage fix."',
        'One skill, five reps (Tier 4): "Give me 5 practice questions one at a time. Correct me each time."',
        'Premise check (Tier 2 escape): "What assumptions am I making? What would make this wrong?"',
        'Overly positive detector (Tier 4): "Assume I\'m overconfident. Be skeptical and specific."',
      ],
      speakerNotes: "Now let's be real. Many of you are AI-curious, but your system is cautious.\n\nHere are teacher-safe moves you can do tomorrow.\n\n1) Rubric mirror (Tier 4)\nPrompt: \"Score this using the rubric. Quote evidence. Highest leverage fix.\"\n\n2) One skill, five reps (Tier 4)\nPrompt: \"Give me 5 practice questions one at a time. Correct me each time.\"\n\n3) Premise check (Tier 2 escape hatch)\nPrompt: \"What assumptions am I making? What would make this wrong? What am I missing?\"\n\n4) Overly positive detector (Tier 4)\nPrompt: \"Assume I'm overconfident. Be skeptical and specific.\"\n\nThis is not cheating. This is feedback literacy and practice design.",
    },
    {
      id: '13',
      layout: 'closing',
      title: 'A class: Self-Advocacy With AI',
      subtitle: 'Coach prompts. Validation. Practice loops. Reflection.',
      speakerNotes: "Eddy's story is not about college versus no college.\n\nIt's about a student learning to think in a world where answers are cheap.\n\nThe scariest failure mode isn't AI being wrong.\nIt's a student not realizing it might be wrong, and not knowing how to check.\n\nIf we teach the Prompt Pyramid, the intern rule, and reflection loops, we don't get less learning. We get more learning.\n\nIf you want to pilot this as a staff workshop, a department experiment, an after-school program, or a short class, I'd love to help.\n\nBecause we do not need to tell students they're wrong.\nWe need to help them find out on their own.\n\nThank you.",
    },
  ],
};
