class SessionsController < ApplicationController
  before_action :authorized, except: :create

  def create
    user = User.find_by(tel: params[:tel])
    if user&.authenticate(params[:password])
      token = encode_token(user_id: user.id)
      render json: {user: user, token: token}
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:session).permit(:tel, :password)
  end
end
