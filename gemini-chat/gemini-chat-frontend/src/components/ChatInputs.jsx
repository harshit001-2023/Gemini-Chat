import { useState } from "react";

const ChatInput = ({onSubmit}) => {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            onSubmit(question);
            setQuestion("");
        }
    }
    return(
        <div className="container my-4">
            <form onSubmit={handleSubmit} align="center">
                <div className="form-group w-100">
                    <label>Ask Something</label>
                    <input
                    text = "text"
                    className="form-control"
                    id="question"
                    placeholder="Enter something to ask"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary ml-2">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default ChatInput;