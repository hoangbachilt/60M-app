class UsersController < ApplicationController
  before_action :authorized, except: :create

  def show
    user = User.find params[:id]
    render json: {user: user, image_url: url_for(user.image)}
  end

  def create
    user = User.new user_params
    if params[:user][:image] != "null"
      user.image.attach(params[:user][:image])
    else
      user.image.attach(io: File.open(Rails.root.join("app", "assets", "images", "avatar-default.png")), filename: 'avatar-default.png' , content_type: "image/png")
    end
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
    params.require(:edit_params).permit(:full_name, :tel, :age, :sex, :information, :link_fb, :image, :image_name)
  end
end
