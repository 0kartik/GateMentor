function Header({ examType, onExamTypeChange }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title">GateMentor</h1>
        <div className="exam-selector">
          <label htmlFor="exam-type">Exam Type</label>
          <select
            id="exam-type"
            value={examType}
            onChange={(e) => onExamTypeChange(e.target.value)}
            className="exam-dropdown"
          >
            <option value="GATE">GATE</option>
            <option value="DSA">DSA</option>
            <option value="CS Theory">CS Theory</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
