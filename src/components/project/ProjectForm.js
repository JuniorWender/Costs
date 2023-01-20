function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Project Name" />
            </div>
            <div>
                <input type="number" placeholder="Total Project Budget" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled> 
                        Select The Category 
                    </option>
                </select>
            </div>
            <div>
                <input type="submit" value="Create Project"></input>
            </div>
        </form>
    )
}

export default ProjectForm