export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-sm text-muted-foreground space-y-2">
          <h3 className="font-semibold text-foreground">Usage Guidelines:</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Comments are 1–3 sentences for clarity and impact</li>
            <li>
              Avoid generic praise, sales pitches, and controversial topics
            </li>
            <li>
              Generated comments are starting points—personalize before posting
            </li>
            <li>
              Respect LinkedIn community guidelines and professional etiquette
            </li>
            <li>No data is stored or sent to external servers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
