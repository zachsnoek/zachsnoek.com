# TODO Cleanup Plan

This document outlines all TODOs found in non-MDX files and the plan to fix each one.

## Checklist

- [x] 1. `mdx-components.tsx` - Fix types for MDX component overrides (Medium)
- [ ] 2. `commitlint.config.js` - Fix kebab-case comment (Low)
- [ ] 3. `components/Spacer.tsx` - Remove component and use Flexbox (High)
- [ ] 4. `components/Input/Input.tsx` - Create size variants matching Button (Low)
- [x] 5. `components/blog/HljsScript.tsx` - Fix types for hljs global (Medium)
- [x] 6. `components/MailingListSignup/MailingListSignup.tsx` - Add VisuallyHidden label (High)

---

## 1. `mdx-components.tsx` - Fix Types (Lines 14, 18, 22)

### Current State

```tsx
h2: (props) => {
    // @ts-expect-error TODO: Fix types
    return <CopyableHeader as="h2" {...props} />;
},
```

The MDX component override passes `props` from the MDX system to custom components. The type mismatch occurs because:

- MDX passes `React.ComponentPropsWithoutRef<'h2'>` (includes all HTML heading attributes)
- `CopyableHeader` expects `{ as: 'h2' | 'h3'; children: React.ReactNode }`

### Plan

Update `CopyableHeader` props type to extend the native heading props:

```tsx
type Props = { as: 'h2' | 'h3' } & React.ComponentPropsWithoutRef<'h2'>;
```

This allows `CopyableHeader` to accept any props that a native heading would accept, making the spread in `mdx-components.tsx` type-safe.

Similarly for the `Link` component on line 22, the MDX anchor props need to align with the `LinkProps` type. The `LinkProps` already extends `NextLinkProps` and includes `target`, so the issue may be that MDX provides `React.AnchorHTMLAttributes` which includes more properties. The fix is to ensure `LinkProps` accepts any standard anchor attributes that MDX might pass.

### Files to Modify

- `components/blog/CopyableHeader/CopyableHeader.tsx`
- `components/Link/Link.tsx` (if needed)
- `mdx-components.tsx` (remove `@ts-expect-error` comments)

---

## 2. `commitlint.config.js` - Fix kebab-case Comment (Line 23)

### Current State

```js
'type-case': [2, 'always', 'camel-case'], // TODO: Fix kebab-case
```

### Analysis

The comment "Fix kebab-case" is confusing. Looking at the configuration:

- The rule enforces `camel-case` for commit types
- Custom types like `createPost` and `updatePost` use camelCase
- This is intentional per the CLAUDE.md documentation

### Plan

The TODO comment is misleading. The current configuration is correct. The comment should either:

1. Be removed entirely (recommended)
2. Be updated to explain why camelCase is used instead of the conventional kebab-case

### Files to Modify

- `commitlint.config.js` (remove or clarify the comment)

---

## 3. `components/Spacer.tsx` - Remove and Use Flexbox (Line 16)

### Current State

```tsx
// TODO: Remove this component and use Flexbox instead
export function Spacer({ axis = 'vertical', size }: SpacerProps) { ... }
```

### Analysis

The `Spacer` component is used in 8 files:

- `components/PostPreview/PostPreview.tsx`
- `components/PostPreviewList.tsx`
- `components/MailingListSignup/MailingListSignup.tsx`
- `components/MainContentLayout.tsx`
- `app/page.tsx`
- `app/layout.tsx`
- `app/contact/page.tsx`
- `app/blog/[id]/page.tsx`

### Plan

1. **Audit each usage** to understand the context
2. **Replace with CSS gap** where components use Flexbox or Grid layouts
3. **Replace with margin/padding** where gap doesn't apply
4. **Remove the Spacer component** once all usages are migrated
5. **Delete the Spacer.tsx file**

### Files to Modify

- All 8 files listed above
- `components/Spacer.tsx` (delete)

---

## 4. `components/Input/Input.tsx` - Create Size Variants (Line 4)

### Current State

```tsx
// TODO: Create size variants that match Button sizes
export function Input(props: React.ComponentProps<'input'>) { ... }
```

### Analysis

The `Button` component has sizes: `'small' | 'medium' | 'large'`

The Input component currently has no size prop and only has basic styling.

### Plan

1. Add a `size` prop to `Input` with values `'small' | 'medium' | 'large'`
2. Update `Input.module.scss` with size variant styles that match Button's sizing
3. Ensure the default size is `'medium'` for consistency with Button

### Files to Modify

- `components/Input/Input.tsx`
- `components/Input/Input.module.scss`

---

## 5. `components/blog/HljsScript.tsx` - Fix Types (Lines 11, 13)

### Current State

```tsx
onLoad={() => {
    // @ts-expect-error TODO: Fix types
    hljs.configure({ ignoreUnescapedHTML: true });
    // @ts-expect-error TODO: Fix types
    hljs.highlightAll();
}}
```

### Analysis

`hljs` is loaded from a CDN and becomes a global variable. TypeScript doesn't know about this global.

### Plan

Two options:

**Option A: Declare global type (Recommended)**
Add a type declaration for the `hljs` global:

```tsx
declare const hljs: {
  configure: (options: { ignoreUnescapedHTML: boolean }) => void;
  highlightAll: () => void;
};
```

**Option B: Use window object**
Access via `window.hljs` with proper typing.

### Files to Modify

- `components/blog/HljsScript.tsx` (add type declaration, remove `@ts-expect-error`)

---

## 6. `components/MailingListSignup/MailingListSignup.tsx` - VisuallyHidden Label (Line 65)

### Current State

```tsx
<form onSubmit={handleSubmit} className={styles.form}>
    {/* TODO: VisuallyHidden label */}
    <Input
        id="mailing-list-email"
        type="email"
        ...
        placeholder="Email address"
    />
```

### Analysis

The input has a placeholder but no associated `<label>` element. This is an accessibility issue:

- Screen readers rely on labels to announce form fields
- The `placeholder` attribute is not a substitute for a label
- A "visually hidden" label provides screen reader support without visual clutter

### Plan

1. Create a `VisuallyHidden` component using the standard CSS technique
2. Add a visually hidden label associated with the input via `htmlFor`

```tsx
<VisuallyHidden as="label" htmlFor="mailing-list-email">
    Email address
</VisuallyHidden>
<Input id="mailing-list-email" ... />
```

### Files to Create

- `components/VisuallyHidden/VisuallyHidden.tsx`
- `components/VisuallyHidden/VisuallyHidden.module.scss`
- `components/VisuallyHidden/index.ts`

### Files to Modify

- `components/MailingListSignup/MailingListSignup.tsx`

---

## Recommended Execution Order

1. **VisuallyHidden label** (accessibility fix, high impact)
2. **Spacer removal** (code cleanup, high effort but valuable)
3. **HljsScript types** (quick fix, improves type safety)
4. **mdx-components types** (improves type safety)
5. **commitlint comment** (trivial cleanup)
6. **Input size variants** (nice-to-have, low priority)

---

## Notes

- The Spacer removal is the most invasive change and should be done carefully with visual regression testing
- The accessibility fix (VisuallyHidden) should be prioritized for user experience
- Type fixes are medium priority and improve developer experience
- The Input size variants TODO may be deferred if there's no immediate need
