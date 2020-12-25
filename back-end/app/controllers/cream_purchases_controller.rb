class CreamPurchasesController < ApplicationController
  def create
    params[:cream_ids].each {|cream_id| current_user.cream_purchases.build(cream_id: cream_id, status: params[:cream_purchase][:status]).save}
    current_user.update_attribute("point", (current_user.point + params[:point]))
    render json: current_user
  end

  private

  def cream_purchase_params
    params.require(:cream_purchase).permit(:cream_ids)
  end
end
