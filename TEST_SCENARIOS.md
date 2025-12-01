# PDF Import Test Scenarios

This document outlines test scenarios for the PDF import functionality.

## Prerequisites

1. Ensure `OPENROUTER_API_KEY` is set in environment variables
2. Have sample PDF CV files ready for testing
3. Access to the editor page (`/editor`)

## Test Scenarios

### Scenario 1: Successful PDF Import with Complete Data

**Objective:** Verify that a PDF with complete CV information is correctly imported and displayed in the editor.

**Steps:**
1. Navigate to `/editor`
2. Click the "Import" button in the header
3. Select "Import from PDF"
4. Upload a PDF file containing:
   - Personal information (name, email, phone, location)
   - Professional summary
   - Work experience (multiple entries)
   - Education (multiple entries)
   - Projects
   - Skills

**Expected Results:**
- Loading indicator appears during import
- Success toast notification appears
- Editor preview updates with imported data
- All form fields are populated correctly
- Personal info section shows correct name, email, phone, location
- Experience section shows all work entries
- Education section shows all education entries
- Projects section shows all projects
- Skills section shows skills

**Verification Points:**
- [ ] All personal info fields are populated
- [ ] All experience entries are visible and correct
- [ ] All education entries are visible and correct
- [ ] All projects are visible and correct
- [ ] Skills are displayed correctly
- [ ] Summary text is present
- [ ] Social links are extracted if present in PDF

---

### Scenario 2: PDF Import with Partial Data

**Objective:** Verify that a PDF with incomplete information is handled gracefully.

**Steps:**
1. Navigate to `/editor`
2. Click "Import" → "Import from PDF"
3. Upload a PDF containing only:
   - Name and email
   - One work experience entry
   - No education, projects, or skills

**Expected Results:**
- Import succeeds
- Only available data is populated
- Missing sections remain empty or use defaults
- No errors occur

**Verification Points:**
- [ ] Personal info shows only name and email
- [ ] Experience section shows the one entry
- [ ] Education section is empty
- [ ] Projects section is empty
- [ ] Skills section is empty or has default content

---

### Scenario 3: PDF Import with Multiple Social Links

**Objective:** Verify that social media links are correctly extracted and mapped.

**Steps:**
1. Upload a PDF containing LinkedIn, GitHub, and Twitter URLs
2. Verify social links are extracted

**Expected Results:**
- All social links are extracted
- Platform types are correctly identified (linkedin, github, twitter)
- URLs are preserved correctly

**Verification Points:**
- [ ] LinkedIn URL is extracted and platform is set to "linkedin"
- [ ] GitHub URL is extracted and platform is set to "github"
- [ ] Twitter URL is extracted and platform is set to "twitter"
- [ ] All URLs are clickable and correct

---

### Scenario 4: Error Handling - Invalid File Type

**Objective:** Verify that non-PDF files are rejected with appropriate error message.

**Steps:**
1. Click "Import" → "Import from PDF"
2. Upload a `.txt`, `.docx`, or `.jpg` file

**Expected Results:**
- Error toast appears
- Error message indicates file must be a PDF
- Editor is not updated
- File input is cleared

**Verification Points:**
- [ ] Error toast shows "Invalid file type"
- [ ] Message indicates PDF is required
- [ ] No data is imported
- [ ] Editor remains unchanged

---

### Scenario 5: Error Handling - Corrupted or Unreadable PDF

**Objective:** Verify that corrupted PDFs are handled gracefully.

**Steps:**
1. Upload a corrupted PDF file or PDF with no extractable text
2. Observe error handling

**Expected Results:**
- Error toast appears
- Error message indicates PDF parsing failed
- Editor is not updated

**Verification Points:**
- [ ] Error toast appears
- [ ] Error message is user-friendly
- [ ] No partial data is imported
- [ ] Editor remains unchanged

---

### Scenario 6: Error Handling - Missing API Key

**Objective:** Verify behavior when OpenRouter API key is not configured.

**Steps:**
1. Remove or invalidate `OPENROUTER_API_KEY` environment variable
2. Attempt to import a PDF

**Expected Results:**
- Error toast appears
- Error message indicates API configuration issue
- No data is imported

**Verification Points:**
- [ ] Error message indicates API configuration problem
- [ ] Error is logged server-side
- [ ] User sees appropriate error message

---

### Scenario 7: Large PDF File Handling

**Objective:** Verify that large PDF files are handled correctly.

**Steps:**
1. Upload a PDF file larger than 5MB
2. Verify import process

**Expected Results:**
- File uploads successfully
- Text extraction works
- Import completes (may take longer)

**Verification Points:**
- [ ] No timeout errors occur
- [ ] All content is extracted
- [ ] Import completes successfully

---

### Scenario 8: PDF with Complex Formatting

**Objective:** Verify that PDFs with complex layouts are parsed correctly.

**Steps:**
1. Upload a PDF with:
   - Multi-column layout
   - Tables
   - Bullet points
   - Special characters

**Expected Results:**
- Text is extracted correctly
- Formatting is preserved where possible
- Bullet points are converted to HTML lists
- Special characters are handled correctly

**Verification Points:**
- [ ] All text is extracted
- [ ] Bullet points appear as HTML lists in descriptions
- [ ] Special characters display correctly
- [ ] No data loss occurs

---

### Scenario 9: Editor State Update Verification

**Objective:** Verify that the editor updates immediately after import.

**Steps:**
1. Start with empty/default CV
2. Import a PDF
3. Immediately check editor state

**Expected Results:**
- Editor preview updates instantly
- Form fields reflect imported data
- Active section shows imported content
- No page refresh required

**Verification Points:**
- [ ] Preview updates without page refresh
- [ ] Form fields are populated
- [ ] Zustand store is updated
- [ ] All components react to store changes

---

### Scenario 10: Multiple Sequential Imports

**Objective:** Verify that importing multiple PDFs sequentially works correctly.

**Steps:**
1. Import first PDF
2. Verify data is imported
3. Import second PDF (different content)
4. Verify editor updates with new data

**Expected Results:**
- First import succeeds
- Second import replaces first import's data
- No data mixing occurs
- Each import is independent

**Verification Points:**
- [ ] Second import replaces first
- [ ] No remnants of first import remain
- [ ] Editor shows only second import's data
- [ ] Store is properly updated

---

### Scenario 11: Import During Active Editing

**Objective:** Verify that importing while editing doesn't cause data loss.

**Steps:**
1. Start editing a CV
2. Make some changes
3. Import a PDF without saving
4. Verify imported data replaces current data

**Expected Results:**
- Warning or confirmation might be shown (if implemented)
- Imported data replaces current data
- No data corruption occurs

**Verification Points:**
- [ ] Current edits are replaced by imported data
- [ ] No data mixing occurs
- [ ] Editor state is consistent

---

### Scenario 12: Date Format Handling

**Objective:** Verify that various date formats are correctly parsed.

**Steps:**
1. Upload PDF with dates in different formats:
   - "2020-2024"
   - "Jan 2020 - Present"
   - "2020"
   - "01/2020 - 12/2023"

**Expected Results:**
- Dates are extracted and normalized
- Consistent format in editor
- "Present" is preserved for current positions

**Verification Points:**
- [ ] Dates are extracted correctly
- [ ] Format is consistent in editor
- [ ] "Present" is preserved where applicable

---

## Manual Testing Checklist

Before marking PDF import as complete, verify:

- [ ] All test scenarios pass
- [ ] Error messages are user-friendly
- [ ] Loading states work correctly
- [ ] Toast notifications appear appropriately
- [ ] Editor updates immediately after import
- [ ] No console errors occur
- [ ] No server errors in logs
- [ ] Performance is acceptable (< 10 seconds for typical PDF)
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Works on mobile devices (if applicable)

## Automated Testing (Future)

Consider implementing automated tests for:
- Unit tests for `mapExtractedDataToCV` function
- Integration tests for API route
- E2E tests for full import flow
- Error handling tests
- Edge case tests
