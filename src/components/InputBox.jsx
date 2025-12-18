function InputBox({ concept, onConceptChange, onExplain, isLoading }) {
  const isDisabled = !concept.trim() || isLoading;

  return (
    <section className="input-section">
      <h2 className="section-title">Ask a concept you want to master</h2>
      <textarea
        className="concept-input"
        placeholder="Enter a topic (e.g., 'Deadlock in OS') or paste a question..."
        value={concept}
        onChange={(e) => onConceptChange(e.target.value)}
        rows={6}
        disabled={isLoading}
      />
      <button
        className="explain-button"
        onClick={onExplain}
        disabled={isDisabled}
      >
        {isLoading ? 'Generating...' : 'Explain Concept'}
      </button>
    </section>
  );
}

export default InputBox;
