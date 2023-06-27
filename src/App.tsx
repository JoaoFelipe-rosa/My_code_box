import TodoList from "./assets/ToDo_list/ToDoList";

function App() {
    const dataStart = "12/06/2023";
    return (
        <>
            <div >
                <div>
                    <h1>inicio do projeto - {dataStart}</h1>
                </div>
                <div>
                    <a href="https://miro.com/welcomeonboard/Z3BRSlZPdm1wQjVacFZnTWxOeVBFeko1Sml0MTB5a0Iya2EwdE1wZUV6TTVYRWQ4aWhmazI1YU1zalQ4VTI5VHwzNDU4NzY0NTM3MjE2MjcxODUzfDI=?share_link_id=174080567873">
                        Link do projeto no miro
                    </a>
                </div>
            </div>

            <TodoList />
        </>
    );
}

export default App;
