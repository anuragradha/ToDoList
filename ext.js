var todoid = 0;

function deleteTodo(id){
    $('#'+id).remove();
}

function createTodo(t){
    todoid +=1;
    html = `
                            <div class="uk-margin uk-card uk-card-primary uk-card-hover uk-light uk-padding" id='${todoid}'>
                                <div class="uk-body">`;
    html += t;
    html += `<br><br>
                                    <button class="uk-button uk-button-secondary" onClick="deleteTodo(${ todoid })">delete</button>
                                </div>
                            </div>
                        </div>
                   `;
    return html;
}

function addTodo(){
    var todo = $('#input').val();
    $('#container').append(createTodo(todo));
}

$('document').ready(function() {
        
        
    
    }
);