import React, { useState, useEffect } from 'react';
import { Settings, X, Save, RotateCcw } from 'lucide-react';

/**
 * On-screen live personalization editor for previewing changes to names and messages.
 */
export default function PersonalizeModal({ config, onUpdateConfig }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    herName: config.herName,
    yourName: config.yourName,
    welcomeMessage: config.personalWelcome.message,
    letterBody: config.loveLetter.body,
    proposalQuestion: config.proposal.question,
  });

  useEffect(() => {
    setFormData({
      herName: config.herName,
      yourName: config.yourName,
      welcomeMessage: config.personalWelcome.message,
      letterBody: config.loveLetter.body,
      proposalQuestion: config.proposal.question,
    });
  }, [config]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateConfig({
      ...config,
      herName: formData.herName,
      yourName: formData.yourName,
      personalWelcome: {
        ...config.personalWelcome,
        message: formData.welcomeMessage,
      },
      loveLetter: {
        ...config.loveLetter,
        body: formData.letterBody,
      },
      proposal: {
        ...config.proposal,
        question: formData.proposalQuestion,
      },
    });
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="personalize-toggle-btn"
        onClick={() => setIsOpen(true)}
        title="Personalize names & messages"
        aria-label="Open personalization editor"
      >
        <Settings size={14} />
        <span>Personalize</span>
      </button>

      {isOpen && (
        <div className="personalize-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div
            className="personalize-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-header">
              <h3 id="modal-title">Personalize Your Proposal 💌</h3>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="herName">Her Name / Nickname</label>
                <input
                  id="herName"
                  name="herName"
                  type="text"
                  value={formData.herName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="yourName">Your Name</label>
                <input
                  id="yourName"
                  name="yourName"
                  type="text"
                  value={formData.yourName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="welcomeMessage">Welcome Message</label>
                <textarea
                  id="welcomeMessage"
                  name="welcomeMessage"
                  value={formData.welcomeMessage}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="letterBody">Personal Love Letter</label>
                <textarea
                  id="letterBody"
                  name="letterBody"
                  value={formData.letterBody}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <div className="form-group">
                <label htmlFor="proposalQuestion">Proposal Question</label>
                <input
                  id="proposalQuestion"
                  name="proposalQuestion"
                  type="text"
                  value={formData.proposalQuestion}
                  onChange={handleChange}
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  <Save size={16} />
                  <span>Apply Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
