const TrackerTable = (props) => {
    const { id, Title, Amount, deleteExpense } = props
    const handleDelete = () => {
        deleteExpense(id)
    }
    return (
        <div className="outercontainer">
        <div className={`outer ${Amount > 0 ? 'positive' : 'negative'}`}>
            <div className="title">{Title}</div>
            <div className="amount">{Amount}</div>
        </div>
        <button className="dltbtn" onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default TrackerTable