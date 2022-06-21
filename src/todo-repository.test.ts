import { clearTestDB, initTestDB } from "./test-utils";
import { get_all, save, Todo } from "./todo-repository";

describe("Todos repository", () => {
    const testDb: FirebaseFirestore.Firestore = initTestDB()

    afterEach(async () => {
        console.log("CLEARING DB...")
        await clearTestDB()
        
        
        //await new Promise(f => setTimeout(f, 500));
        console.log("CLEAN DB...")
    })

    test('adding todo', async () => {        
        const todo: Todo = {
            id: "ID",
            title: "Title",
            description: "This is a description"
        }
        
        await save(testDb)(todo)
    });
    
    test('getting all stored todos', async () => {
        const todo_1: Todo = {
            id: "ID",
            title: "Title",
            description: "This is a description"
        }
        
        const todo_2: Todo = {
            id: "ID",
            title: "Title",
            description: "This is a description"
        }
    
        await save(testDb)(todo_1)
        await save(testDb)(todo_2)
    
        const stored_todos = await get_all(testDb)()
            
        expect(stored_todos).toEqual([todo_1, todo_2])
    });
})
