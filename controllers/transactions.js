const Transaction=require('../models/Transaction');
/**
 * @route   GET /api/v1/transactions
 * @desc    Get all transactions
 * @access  public
 */
exports.getTransactions=async(req, res)=> {
    try {
        const transactions=await Transaction.findAll();
        return res.status(200).json({success:true, data:transactions});
    } catch (e) {
        return res.status(500).json({success:false, error:'server error'})
    }
}/**
 * @route   POST /api/v1/transactions
 * @desc    Add a transaction
 * @access  public
 */
exports.addTransaction=async(req, res)=> {
    const{text,amount}=req.body;
    try {
        const transaction=await Transaction.create(req.body)
        return res.status(201).json({success:true, data:transaction})
    } catch (err) {
        return res.status(400).json({success:false, error:'server error'})
    }
   
}
/**
 * @route   DELTE /api/v1/transactions/:id
 * @desc    DELTE all transactions
 * @access  public
 */
exports.deleteTransaction=async(req, res)=> {
    try {
        const transaction=await Transaction.findByPk(req.params.id)
        if(!transaction) {
            return res.status(404).json({success:false, error:'none found'})
        };
        await transaction.destroy({where:{id:req.params.id}});
        return res.status(200).json({success:true, data:{}});
    } catch (err) {
        return res.status(400).json({success:false, error:'server error', id:req.params.id})
    }
}