class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render json: @todos
    # respond_to do |format|
    #   format.json { render :index }
    # end
  end

  def create
    @todo = Todo.new(todoparams)
    render json: @todo
    # if @todo.save
    #   respond_to do |format|
    #     format.json { render :show }
    #   end
    # else
    #   render @todo.errors.full_messages
    # end
  end

# $.ajax({
#   url: "api/todos",
#   type: "POST",
#   datatype: "json",
#   data: {
#     todo: { title: "A new todo",
#     body: "Created by ajax!",
#     done: false }
#   },
#   success(response){
#     console.log(response)
#   }
#   });


  def update
    @todo = Todo.find_by_id(params[:id])
    render json: @todo
    # if @todo.update
    #   respond_to do |format|
    #     format.json { render :show }
    #   end
    # else
    #   render @todo.errors.full_messages
    # end
  end

  def destroy
    @todo = Todo.find_by_id(params[:id])
    render json: @todo
    # @todo.destroy!
    #
    # respond_to do |format|
      # format.json { render json:  }
    # end
  end

  private

  def todoparams
    params.require(:todo).permit(:title, :body, :done)
  end
end
