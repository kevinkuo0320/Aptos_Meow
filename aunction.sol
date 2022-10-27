pragma solidity >=0.4.22 <0.6.0;

contract SimpleAuction {
  
    address payable public beneficiary;
    uint public auctionEndTime;

    address public highestBidder;
    uint public highestBid;

    mapping(address => uint) pendingReturns;

    bool ended;

    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount);

    uint minimalBid; 
    uint minimalIncrement; 

    bool bidderReceieveGoods; 

    constructor(
        uint _biddingTime,
        address payable _beneficiary, 
        uint _minimalBid, 
        uint _minimalIncrement
    ) public {
        beneficiary = _beneficiary;
        auctionEndTime = now + _biddingTime;
        minimalBid = _minimalBid; 
        minimalIncrement = _minimalIncrement; 
    }

    function bid() public payable {
      
        require(
            now <= auctionEndTime,
            "Auction already ended."
        );

        require(
            msg.value > highestBid,
            "There already is a higher bid."
        );

        require(msg.value > minimalBid,
            "the bid amount must be more than the minimal bid"
        ); 

        require(msg.value - highestBid > minimalIncrement,
            "violate minimal increment"
        ); 

        if (highestBid != 0) {
            pendingReturns[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
        emit HighestBidIncreased(msg.sender, msg.value);
    }

    function withdraw() public returns (bool) {
        uint amount = pendingReturns[msg.sender];
        if (amount > 0) {
            
            pendingReturns[msg.sender] = 0;

            if (!msg.sender.send(amount)) {
                pendingReturns[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }

    function highestBidderConfirmReceiveGoods() public {
        require(now >= auctionEndTime, "auction not ended"); 
        require(msg.sender == highestBidder, "not highest bidder"); 
        bidderReceieveGoods = true; 
    }

 
    function auctionEnd() public {
      
        require(now >= auctionEndTime, "Auction not yet ended.");
        require(!ended, "auctionEnd has already been called.");
        require(bidderReceieveGoods, "highest bidder not yet recieve goods"); 

        ended = true;
        emit AuctionEnded(highestBidder, highestBid);

        beneficiary.transfer(highestBid);
    }
}