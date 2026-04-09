

## Redesign: Add "Involved in a will dispute?" Statistics Section

The screenshot shows a full-width dark banner with a background image of a professional woman, overlaid with statistics about inheritance disputes. The goal is to make this visually impactful and not text-heavy.

### What will be built

A new `InheritanceStatsSection` component -- a full-width dark banner featuring:

1. **Background**: The uploaded woman's photo as a right-aligned background image with a dark overlay (dark navy gradient from left to right, so text on the left is readable while the photo shows through on the right)
2. **Left content** (concise, not text-heavy):
   - Bold heading: "Involved in a will dispute or inheritance claim?"
   - Two short stat callouts styled as compact blocks (not paragraphs):
     - "1 in 3" stat about relying on inheritance
     - "38%" stat about disputing a will
   - One-line empathetic statement about providing clear advice
   - Source citation with a left border accent
   - Gold "Free claim assessment" CTA button
3. **Layout**: Single column text over the background image, no separate image column needed since the photo IS the background

### Where it goes

Insert between `SituationsSection` and `NoLegalFeesSection` in `Index.tsx` (or replace one if preferred -- will place it after SituationsSection).

### Technical details

- **New file**: `src/components/InheritanceStatsSection.tsx`
- **Asset**: Copy uploaded screenshot's woman photo -- since we don't have the raw photo, we'll use the existing `costs-consultation.webp` or similar professional image already in assets. Alternatively, I'll use a dark solid background with no image if no suitable photo exists.
- **Styling**: Dark background (`bg-primary` or custom navy), white text, gold accent button, left border on citation
- **Stats as visual elements**: Use large bold numbers ("1 in 3", "38%") with short descriptions beside them, rather than full paragraphs -- keeping it scannable
- **Edit**: `src/pages/Index.tsx` to add the new component

### Files changed
1. **Create** `src/components/InheritanceStatsSection.tsx`
2. **Edit** `src/pages/Index.tsx` -- add import and place component

