'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardCheck,
  ArrowRight,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type CheckStatus = 'pass' | 'fail' | 'warning';

interface CheckResult {
  id: string;
  label: string;
  status: CheckStatus;
  message: string;
  weight: number;
}

interface AnalysisResult {
  score: number;
  checks: CheckResult[];
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ACTION_VERBS = [
  'achieved',
  'accelerated',
  'accomplished',
  'administered',
  'advanced',
  'analyzed',
  'architected',
  'automated',
  'boosted',
  'built',
  'captured',
  'centralized',
  'championed',
  'coached',
  'collaborated',
  'completed',
  'conceptualized',
  'consolidated',
  'contributed',
  'converted',
  'coordinated',
  'crafted',
  'created',
  'cultivated',
  'cut',
  'decreased',
  'defined',
  'delivered',
  'designed',
  'developed',
  'devised',
  'directed',
  'drove',
  'earned',
  'eliminated',
  'enabled',
  'engineered',
  'enhanced',
  'established',
  'evaluated',
  'exceeded',
  'executed',
  'expanded',
  'expedited',
  'facilitated',
  'forecasted',
  'formulated',
  'founded',
  'generated',
  'grew',
  'guided',
  'headed',
  'identified',
  'implemented',
  'improved',
  'increased',
  'influenced',
  'initiated',
  'innovated',
  'inspected',
  'inspired',
  'instituted',
  'integrated',
  'introduced',
  'invented',
  'launched',
  'led',
  'leveraged',
  'maintained',
  'managed',
  'maximized',
  'mentored',
  'migrated',
  'minimized',
  'modernized',
  'monitored',
  'negotiated',
  'operated',
  'optimized',
  'orchestrated',
  'organized',
  'outperformed',
  'overhauled',
  'oversaw',
  'performed',
  'piloted',
  'pioneered',
  'planned',
  'prepared',
  'presented',
  'prioritized',
  'produced',
  'programmed',
  'promoted',
  'proposed',
  'provided',
  'published',
  'raised',
  'ranked',
  'reached',
  'realigned',
  'rebuilt',
  'recaptured',
  'reconciled',
  'recruited',
  'redesigned',
  'reduced',
  'refined',
  'refactored',
  'reformed',
  'regenerated',
  'remodeled',
  'reorganized',
  'replaced',
  'researched',
  'resolved',
  'restored',
  'restructured',
  'revamped',
  'revitalized',
  'saved',
  'scaled',
  'secured',
  'simplified',
  'solved',
  'spearheaded',
  'standardized',
  'steered',
  'streamlined',
  'strengthened',
  'succeeded',
  'supervised',
  'surpassed',
  'sustained',
  'synchronized',
  'systemized',
  'targeted',
  'trained',
  'transformed',
  'trimmed',
  'tripled',
  'unified',
  'upgraded',
  'utilized',
  'validated',
  'visualized',
  'widened',
  'won',
];

const SECTION_PATTERNS: Record<string, RegExp> = {
  summary:
    /\b(summary|objective|profile|about\s+me|professional\s+summary|career\s+summary|career\s+objective|executive\s+summary)\b/i,
  experience:
    /\b(experience|work\s+history|employment|professional\s+experience|work\s+experience|career\s+history|relevant\s+experience)\b/i,
  education:
    /\b(education|academic|qualifications|degree|university|college|school|certifications?\s+and\s+education)\b/i,
  skills:
    /\b(skills|competencies|technical\s+skills|core\s+competencies|proficiencies|technologies|tools|expertise|areas\s+of\s+expertise)\b/i,
};

/* ------------------------------------------------------------------ */
/*  Analysis helpers                                                   */
/* ------------------------------------------------------------------ */

function checkContactInfo(text: string): CheckResult {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const phoneRegex =
    /(\+?\d{1,3}[\s.-]?)?\(?\d{2,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}/;
  const linkedinRegex = /linkedin\.com\/in\/[a-zA-Z0-9_-]+/i;

  const hasEmail = emailRegex.test(text);
  const hasPhone = phoneRegex.test(text);
  const hasLinkedIn = linkedinRegex.test(text);

  const found: string[] = [];
  const missing: string[] = [];

  if (hasEmail) found.push('email');
  else missing.push('email');
  if (hasPhone) found.push('phone');
  else missing.push('phone');
  if (hasLinkedIn) found.push('LinkedIn');
  else missing.push('LinkedIn');

  if (found.length === 3) {
    return {
      id: 'contact-info',
      label: 'Contact Information',
      status: 'pass',
      message: 'All essential contact information found: email, phone, and LinkedIn.',
      weight: 10,
    };
  }

  if (found.length >= 1) {
    return {
      id: 'contact-info',
      label: 'Contact Information',
      status: 'warning',
      message: `Found ${found.join(', ')} but missing ${missing.join(', ')}. Including all three helps recruiters reach you.`,
      weight: 10,
    };
  }

  return {
    id: 'contact-info',
    label: 'Contact Information',
    status: 'fail',
    message:
      'No contact information detected. Add your email, phone number, and LinkedIn profile URL.',
    weight: 10,
  };
}

function checkSection(
  text: string,
  sectionKey: keyof typeof SECTION_PATTERNS,
  label: string,
  weight: number
): CheckResult {
  const regex = SECTION_PATTERNS[sectionKey];
  if (regex.test(text)) {
    return {
      id: `section-${sectionKey}`,
      label: `${label} Section`,
      status: 'pass',
      message: `${label} section detected.`,
      weight,
    };
  }
  return {
    id: `section-${sectionKey}`,
    label: `${label} Section`,
    status: 'fail',
    message: `No ${label.toLowerCase()} section found. ATS systems look for standard section headings like "${label}".`,
    weight,
  };
}

function checkWordCount(text: string): CheckResult {
  const words = text
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const count = words.length;

  if (count < 200) {
    return {
      id: 'word-count',
      label: 'Resume Length',
      status: 'fail',
      message: `Your resume has approximately ${count} words. This is too short - aim for 400-800 words for a one-page resume.`,
      weight: 8,
    };
  }
  if (count < 400) {
    return {
      id: 'word-count',
      label: 'Resume Length',
      status: 'warning',
      message: `Your resume has approximately ${count} words. Consider adding more detail - the ideal range is 400-800 words for a one-page resume.`,
      weight: 8,
    };
  }
  if (count <= 800) {
    return {
      id: 'word-count',
      label: 'Resume Length',
      status: 'pass',
      message: `Your resume has approximately ${count} words, which is within the ideal 400-800 range for a one-page resume.`,
      weight: 8,
    };
  }
  if (count <= 1200) {
    return {
      id: 'word-count',
      label: 'Resume Length',
      status: 'warning',
      message: `Your resume has approximately ${count} words. This may extend beyond one page. If you have 10+ years of experience this may be appropriate, otherwise consider trimming.`,
      weight: 8,
    };
  }
  return {
    id: 'word-count',
    label: 'Resume Length',
    status: 'warning',
    message: `Your resume has approximately ${count} words. This is quite long and likely multi-page. Ensure the length is justified by your experience level.`,
    weight: 8,
  };
}

function checkActionVerbs(text: string): CheckResult {
  const lines = text.split('\n').filter((l) => l.trim().length > 0);

  // Look for lines that appear to be bullet points
  const bulletLines = lines.filter((line) => {
    const trimmed = line.trim();
    return (
      trimmed.startsWith('-') ||
      trimmed.startsWith('•') ||
      trimmed.startsWith('*') ||
      trimmed.startsWith('–') ||
      /^\d+[.)]/.test(trimmed) ||
      /^[a-z]/i.test(trimmed)
    );
  });

  if (bulletLines.length === 0) {
    return {
      id: 'action-verbs',
      label: 'Action Verbs',
      status: 'warning',
      message:
        'No bullet points detected. Use bullet points starting with strong action verbs (e.g., "Developed", "Led", "Increased") to describe your achievements.',
      weight: 8,
    };
  }

  let actionVerbCount = 0;
  const foundVerbs: string[] = [];

  for (const line of bulletLines) {
    // Strip leading bullet markers
    const cleaned = line
      .trim()
      .replace(/^[-•*–]\s*/, '')
      .replace(/^\d+[.)]\s*/, '');
    const firstWord = cleaned.split(/\s+/)[0]?.toLowerCase();
    if (firstWord && ACTION_VERBS.includes(firstWord)) {
      actionVerbCount++;
      if (!foundVerbs.includes(firstWord)) {
        foundVerbs.push(firstWord);
      }
    }
  }

  const ratio = bulletLines.length > 0 ? actionVerbCount / bulletLines.length : 0;

  if (ratio >= 0.5) {
    return {
      id: 'action-verbs',
      label: 'Action Verbs',
      status: 'pass',
      message: `Good use of action verbs (${actionVerbCount} found). Verbs like "${foundVerbs.slice(0, 3).join('", "')}" make your achievements impactful.`,
      weight: 8,
    };
  }
  if (ratio >= 0.25) {
    return {
      id: 'action-verbs',
      label: 'Action Verbs',
      status: 'warning',
      message: `Found ${actionVerbCount} action verb(s) across ${bulletLines.length} bullet points. Try starting more bullets with verbs like "Achieved", "Led", "Developed", or "Increased".`,
      weight: 8,
    };
  }
  return {
    id: 'action-verbs',
    label: 'Action Verbs',
    status: 'fail',
    message: `Only ${actionVerbCount} of ${bulletLines.length} bullet points start with strong action verbs. Start each bullet with a powerful verb like "Spearheaded", "Delivered", or "Transformed".`,
    weight: 8,
  };
}

function checkQuantifiedAchievements(text: string): CheckResult {
  // Look for numbers, percentages, dollar amounts, etc.
  const metricsPatterns = [
    /\d+%/g, // percentages
    /\$[\d,]+/g, // dollar amounts
    /\b\d{1,3}(,\d{3})+\b/g, // large numbers with commas
    /\b\d+\+?\s*(million|billion|thousand|k\b|M\b)/gi, // shorthand amounts
    /\b(increased|decreased|reduced|improved|grew|boosted|saved|generated|raised|cut)\b.*?\b\d+/gi,
    /\b\d+\s*(users|clients|customers|employees|team\s+members|projects|accounts|reports|deals)/gi,
  ];

  let totalMatches = 0;
  for (const pattern of metricsPatterns) {
    const matches = text.match(pattern);
    if (matches) totalMatches += matches.length;
  }

  if (totalMatches >= 5) {
    return {
      id: 'metrics',
      label: 'Quantified Achievements',
      status: 'pass',
      message: `Found ${totalMatches} quantified achievements. Numbers and metrics make your accomplishments concrete and memorable.`,
      weight: 10,
    };
  }
  if (totalMatches >= 2) {
    return {
      id: 'metrics',
      label: 'Quantified Achievements',
      status: 'warning',
      message: `Found ${totalMatches} quantified achievement(s). Try to include more numbers, percentages, and dollar amounts to strengthen your impact.`,
      weight: 10,
    };
  }
  return {
    id: 'metrics',
    label: 'Quantified Achievements',
    status: 'fail',
    message:
      'No quantified achievements detected. Add numbers, percentages, or dollar amounts (e.g., "Increased revenue by 25%" or "Managed a $2M budget").',
    weight: 10,
  };
}

function checkATSFormatting(text: string): CheckResult {
  const issues: string[] = [];

  // Check for special characters that confuse ATS
  const fancyQuotes = /[\u201C\u201D\u2018\u2019]/g;
  if (fancyQuotes.test(text)) {
    issues.push('smart/curly quotes (use straight quotes instead)');
  }

  // Check for table-like patterns
  if (/\|.*\|.*\|/m.test(text) || /\t{2,}/m.test(text)) {
    issues.push('table-like formatting detected (ATS may not parse tables correctly)');
  }

  // Check for image references
  if (/\b(image|photo|picture|headshot|avatar)\b/i.test(text)) {
    issues.push('possible image/photo reference (ATS cannot read images)');
  }

  // Check for headers/footers content in typical patterns
  if (/page\s+\d+\s+(of|\/)\s+\d+/i.test(text)) {
    issues.push('page numbers detected (information in headers/footers may be skipped by ATS)');
  }

  // Check for excessive special characters
  const specialChars = text.match(/[^\w\s.,;:!?'"()@#$%&*+\-=/\\[\]{}|<>~`^]/g);
  if (specialChars && specialChars.length > 10) {
    issues.push(`${specialChars.length} unusual special characters found that may confuse ATS parsers`);
  }

  // Check for all-caps sections that are very long (can be hard to parse)
  const allCapsLines = text.split('\n').filter((l) => {
    const trimmed = l.trim();
    return trimmed.length > 30 && trimmed === trimmed.toUpperCase() && /[A-Z]/.test(trimmed);
  });
  if (allCapsLines.length > 2) {
    issues.push('multiple lines in ALL CAPS (use standard title case for readability)');
  }

  if (issues.length === 0) {
    return {
      id: 'ats-formatting',
      label: 'ATS-Friendly Formatting',
      status: 'pass',
      message: 'No ATS-unfriendly formatting issues detected.',
      weight: 8,
    };
  }

  return {
    id: 'ats-formatting',
    label: 'ATS-Friendly Formatting',
    status: issues.length >= 3 ? 'fail' : 'warning',
    message: `Formatting issues found: ${issues.join('; ')}.`,
    weight: 8,
  };
}

function checkKeywordMatch(
  resumeText: string,
  jobDescription: string
): CheckResult | null {
  if (!jobDescription.trim()) return null;

  // Extract meaningful keywords from job description (2+ chars, not common stop words)
  const stopWords = new Set([
    'the',
    'and',
    'for',
    'are',
    'but',
    'not',
    'you',
    'all',
    'can',
    'had',
    'her',
    'was',
    'one',
    'our',
    'out',
    'has',
    'have',
    'been',
    'will',
    'with',
    'this',
    'that',
    'from',
    'they',
    'were',
    'been',
    'said',
    'each',
    'which',
    'their',
    'about',
    'would',
    'there',
    'could',
    'other',
    'into',
    'more',
    'than',
    'some',
    'very',
    'when',
    'what',
    'your',
    'also',
    'must',
    'should',
    'able',
    'such',
    'work',
    'role',
    'including',
    'requirements',
    'responsibilities',
    'looking',
    'join',
    'team',
    'position',
    'company',
    'opportunity',
    'description',
    'qualifications',
    'preferred',
    'required',
    'plus',
    'ideal',
    'strong',
    'excellent',
    'good',
    'great',
  ]);

  const extractKeywords = (text: string) => {
    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    return [...new Set(words.filter((w) => !stopWords.has(w)))];
  };

  // Also extract multi-word phrases (bigrams) from job description
  const extractPhrases = (text: string) => {
    const normalized = text.toLowerCase().replace(/[^\w\s]/g, ' ');
    const words = normalized.split(/\s+/).filter((w) => w.length >= 2);
    const phrases: string[] = [];
    for (let i = 0; i < words.length - 1; i++) {
      if (!stopWords.has(words[i]) && !stopWords.has(words[i + 1])) {
        phrases.push(`${words[i]} ${words[i + 1]}`);
      }
    }
    return [...new Set(phrases)];
  };

  const jobKeywords = extractKeywords(jobDescription);
  const resumeLower = resumeText.toLowerCase();

  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const keyword of jobKeywords) {
    if (resumeLower.includes(keyword)) {
      matchedKeywords.push(keyword);
    } else {
      missingKeywords.push(keyword);
    }
  }

  // Check phrase matches
  const jobPhrases = extractPhrases(jobDescription);
  const matchedPhrases: string[] = [];
  const missingPhrases: string[] = [];

  for (const phrase of jobPhrases) {
    if (resumeLower.includes(phrase)) {
      matchedPhrases.push(phrase);
    } else {
      missingPhrases.push(phrase);
    }
  }

  const totalKeywords = jobKeywords.length;
  const matchRate = totalKeywords > 0 ? matchedKeywords.length / totalKeywords : 0;

  if (matchRate >= 0.6) {
    return {
      id: 'keyword-match',
      label: 'Keyword Match',
      status: 'pass',
      message: `Strong keyword match: ${matchedKeywords.length} of ${totalKeywords} keywords found (${Math.round(matchRate * 100)}%). ${missingKeywords.length > 0 ? `Consider adding: ${missingKeywords.slice(0, 5).join(', ')}.` : ''}`,
      weight: 12,
    };
  }
  if (matchRate >= 0.35) {
    return {
      id: 'keyword-match',
      label: 'Keyword Match',
      status: 'warning',
      message: `Moderate keyword match: ${matchedKeywords.length} of ${totalKeywords} keywords found (${Math.round(matchRate * 100)}%). Missing important keywords: ${missingKeywords.slice(0, 8).join(', ')}.`,
      weight: 12,
    };
  }
  return {
    id: 'keyword-match',
    label: 'Keyword Match',
    status: 'fail',
    message: `Low keyword match: only ${matchedKeywords.length} of ${totalKeywords} keywords found (${Math.round(matchRate * 100)}%). Key missing terms: ${missingKeywords.slice(0, 10).join(', ')}.`,
    weight: 12,
  };
}

function checkDateFormatting(text: string): CheckResult {
  // Look for various date formats
  const datePatterns = {
    monthYear: /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\b/gi,
    numericSlash: /\b\d{1,2}\/\d{4}\b/g,
    numericDash: /\b\d{1,2}-\d{4}\b/g,
    yearOnly: /\b(19|20)\d{2}\b/g,
    fullMonth:
      /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi,
    mmddyyyy: /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g,
  };

  const foundFormats: string[] = [];

  for (const [formatName, pattern] of Object.entries(datePatterns)) {
    if (pattern.test(text)) {
      foundFormats.push(formatName);
    }
  }

  if (foundFormats.length === 0) {
    return {
      id: 'date-format',
      label: 'Date Formatting',
      status: 'warning',
      message:
        'No dates detected. If you have work experience or education, include dates (e.g., "Jan 2020 - Present").',
      weight: 5,
    };
  }
  if (foundFormats.length === 1) {
    return {
      id: 'date-format',
      label: 'Date Formatting',
      status: 'pass',
      message: 'Consistent date formatting detected throughout the resume.',
      weight: 5,
    };
  }
  return {
    id: 'date-format',
    label: 'Date Formatting',
    status: 'warning',
    message: `Multiple date formats detected (${foundFormats.length} different styles). Use one consistent format throughout, such as "Month Year" (e.g., "Jan 2020").`,
    weight: 5,
  };
}

function checkPersonalPronouns(text: string): CheckResult {
  const pronounPattern =
    /\b(I|me|my|mine|myself|we|us|our|ours)\b/g;
  const matches = text.match(pronounPattern);
  const count = matches ? matches.length : 0;

  if (count === 0) {
    return {
      id: 'pronouns',
      label: 'Personal Pronouns',
      status: 'pass',
      message:
        'No personal pronouns found. Resumes should use an implied first-person voice without "I", "me", or "my".',
      weight: 5,
    };
  }
  if (count <= 3) {
    return {
      id: 'pronouns',
      label: 'Personal Pronouns',
      status: 'warning',
      message: `Found ${count} personal pronoun(s). Resumes typically omit "I", "me", and "my" - use implied first person instead (e.g., "Managed team of 5" instead of "I managed a team of 5").`,
      weight: 5,
    };
  }
  return {
    id: 'pronouns',
    label: 'Personal Pronouns',
    status: 'fail',
    message: `Found ${count} personal pronouns. Remove "I", "me", "my" and use implied first person (e.g., "Led project..." instead of "I led the project...").`,
    weight: 5,
  };
}

function checkReadability(text: string): CheckResult {
  // Simple readability heuristic based on average sentence length and word length
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 5);
  const words = text.split(/\s+/).filter((w) => w.length > 0);

  if (words.length === 0 || sentences.length === 0) {
    return {
      id: 'readability',
      label: 'Readability',
      status: 'warning',
      message: 'Could not assess readability. Ensure your resume has complete sentences or bullet points.',
      weight: 5,
    };
  }

  const avgWordsPerSentence = words.length / sentences.length;
  const avgWordLength =
    words.reduce((sum, w) => sum + w.replace(/[^\w]/g, '').length, 0) / words.length;

  // Check for overly long sentences
  const longSentences = sentences.filter(
    (s) => s.split(/\s+/).length > 30
  ).length;

  if (avgWordsPerSentence <= 20 && avgWordLength <= 7 && longSentences === 0) {
    return {
      id: 'readability',
      label: 'Readability',
      status: 'pass',
      message: `Good readability. Average sentence length: ${Math.round(avgWordsPerSentence)} words. Content is clear and concise.`,
      weight: 5,
    };
  }
  if (avgWordsPerSentence <= 25 || longSentences <= 2) {
    return {
      id: 'readability',
      label: 'Readability',
      status: 'warning',
      message: `Average sentence length is ${Math.round(avgWordsPerSentence)} words${longSentences > 0 ? ` with ${longSentences} long sentence(s)` : ''}. Consider shortening sentences for better scannability.`,
      weight: 5,
    };
  }
  return {
    id: 'readability',
    label: 'Readability',
    status: 'fail',
    message: `Sentences are too long (avg ${Math.round(avgWordsPerSentence)} words). Recruiters spend ~7 seconds scanning a resume - keep bullet points concise and under 2 lines each.`,
    weight: 5,
  };
}

/* ------------------------------------------------------------------ */
/*  Main analysis function                                             */
/* ------------------------------------------------------------------ */

function analyzeResume(resumeText: string, jobDescription: string): AnalysisResult {
  const checks: CheckResult[] = [
    checkContactInfo(resumeText),
    checkSection(resumeText, 'summary', 'Professional Summary', 8),
    checkSection(resumeText, 'experience', 'Work Experience', 10),
    checkSection(resumeText, 'education', 'Education', 7),
    checkSection(resumeText, 'skills', 'Skills', 8),
    checkWordCount(resumeText),
    checkActionVerbs(resumeText),
    checkQuantifiedAchievements(resumeText),
    checkATSFormatting(resumeText),
    checkDateFormatting(resumeText),
    checkPersonalPronouns(resumeText),
    checkReadability(resumeText),
  ];

  const keywordCheck = checkKeywordMatch(resumeText, jobDescription);
  if (keywordCheck) {
    checks.push(keywordCheck);
  }

  // Calculate weighted score
  const totalWeight = checks.reduce((sum, c) => sum + c.weight, 0);
  const earnedWeight = checks.reduce((sum, c) => {
    if (c.status === 'pass') return sum + c.weight;
    if (c.status === 'warning') return sum + c.weight * 0.5;
    return sum;
  }, 0);

  const score = Math.round((earnedWeight / totalWeight) * 100);

  return { score, checks };
}

/* ------------------------------------------------------------------ */
/*  Score ring component                                               */
/* ------------------------------------------------------------------ */

function ScoreRing({ score }: { score: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const color =
    score >= 80
      ? 'text-green-500'
      : score >= 60
        ? 'text-yellow-500'
        : 'text-red-500';

  const label =
    score >= 80
      ? 'Excellent'
      : score >= 60
        ? 'Good'
        : score >= 40
          ? 'Needs Work'
          : 'Poor';

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative inline-flex items-center justify-center">
        <svg className="h-44 w-44 -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-muted/40"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className={`text-4xl font-bold ${color}`}>{score}</span>
          <span className="text-xs text-muted-foreground">/100</span>
        </div>
      </div>
      <span className={`text-sm font-medium ${color}`}>{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Status icon helper                                                 */
/* ------------------------------------------------------------------ */

function StatusIcon({ status }: { status: CheckStatus }) {
  if (status === 'pass')
    return <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />;
  if (status === 'warning')
    return <AlertTriangle className="h-5 w-5 shrink-0 text-yellow-500" />;
  return <XCircle className="h-5 w-5 shrink-0 text-red-500" />;
}

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export function CheckerForm() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (!resumeText.trim()) return;
    const analysis = analyzeResume(resumeText, jobDescription);
    setResult(analysis);
    setHasAnalyzed(true);
  };

  const handleReset = () => {
    setResult(null);
    setHasAnalyzed(false);
    setResumeText('');
    setJobDescription('');
  };

  const passCount = useMemo(
    () => result?.checks.filter((c) => c.status === 'pass').length ?? 0,
    [result]
  );
  const warnCount = useMemo(
    () => result?.checks.filter((c) => c.status === 'warning').length ?? 0,
    [result]
  );
  const failCount = useMemo(
    () => result?.checks.filter((c) => c.status === 'fail').length ?? 0,
    [result]
  );

  return (
    <div className="mx-auto max-w-4xl">
      {/* ---------- Input form ---------- */}
      {!hasAnalyzed && (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="resume-text" className="text-base font-medium">
              Paste Your Resume Text
            </Label>
            <Textarea
              id="resume-text"
              placeholder="Paste the full text of your resume here... (Tip: open your resume in a text editor or copy from your document)"
              className="min-h-[280px] resize-y text-sm leading-relaxed"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Your resume text is analyzed entirely in your browser. Nothing is
              sent to any server.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="job-description" className="text-base font-medium">
              Job Description{' '}
              <span className="font-normal text-muted-foreground">
                (optional)
              </span>
            </Label>
            <Textarea
              id="job-description"
              placeholder="Paste the job description you're applying for to get keyword match analysis..."
              className="min-h-[140px] resize-y text-sm leading-relaxed"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>

          <Button
            size="lg"
            className="w-full gap-2 rounded-lg text-base"
            onClick={handleAnalyze}
            disabled={!resumeText.trim()}
          >
            <ClipboardCheck className="h-5 w-5" />
            Check My Resume
          </Button>
        </div>
      )}

      {/* ---------- Results ---------- */}
      {hasAnalyzed && result && (
        <div className="space-y-8">
          {/* Score overview */}
          <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-muted/20 p-8 sm:flex-row sm:justify-between">
            <ScoreRing score={result.score} />
            <div className="flex flex-col gap-3 text-center sm:text-left">
              <h3 className="text-xl font-semibold">ATS Compatibility Score</h3>
              <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  {passCount} passed
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  {warnCount} warnings
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <XCircle className="h-4 w-4 text-red-500" />
                  {failCount} failed
                </span>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                {result.score >= 80
                  ? 'Your resume is well-optimized for ATS systems. Keep up the great work!'
                  : result.score >= 60
                    ? 'Your resume is decent but has room for improvement. Address the warnings and failures below.'
                    : 'Your resume needs significant improvements to pass ATS screening. Review each item below.'}
              </p>
            </div>
          </div>

          {/* Individual checks */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Detailed Results</h3>

            {/* Failures first, then warnings, then passes */}
            {[...result.checks]
              .sort((a, b) => {
                const order: Record<CheckStatus, number> = {
                  fail: 0,
                  warning: 1,
                  pass: 2,
                };
                return order[a.status] - order[b.status];
              })
              .map((check) => (
                <div
                  key={check.id}
                  className={`flex items-start gap-3 rounded-lg border p-4 ${
                    check.status === 'fail'
                      ? 'border-red-500/20 bg-red-500/5'
                      : check.status === 'warning'
                        ? 'border-yellow-500/20 bg-yellow-500/5'
                        : 'border-green-500/20 bg-green-500/5'
                  }`}
                >
                  <StatusIcon status={check.status} />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{check.label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {check.message}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-muted/30 p-6 text-center">
            <Sparkles className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-3 text-lg font-semibold">
              Build an ATS-Optimized Resume
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Use Magic Resume&apos;s free editor to create a professionally
              formatted, ATS-friendly resume with real-time preview and AI
              assistance.
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="gap-2 rounded-full px-6">
                <Link href="/editor">
                  Start Building
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full px-6"
                onClick={handleReset}
              >
                <RotateCcw className="h-4 w-4" />
                Check Another Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
