class UsersController < ApplicationController
  before_action :authorized, except: :create

  def show
    user = User.find params[:id]
    render json: {user: user, image_url: url_for(user.image)}
  end

  def create
    user = User.new user_params
    user.image.attach(params[:user][:image])
    user.invalid user
  end

  def update
    user = User.find(params[:id])
    user.update edit_params
    user.invalid user
  end

  private

  def user_params
    params.require(:user).permit(:nick_name, :password, :full_name, :tel,
                                 :image_name, :information, :point,
                                 :age, :sex, :address, :link_fb, :image)
  end

  def edit_params
    params.require(:edit_params).permit(:full_name, :tel, :age, :sex, :information, :link_fb)
  end
end
