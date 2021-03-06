pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Voter {

    struct OptionPos {
        uint pos;
        bool exists;
    }

    uint[] public votes;
    mapping (address => bool) hasVoted;
    mapping (string => OptionPos) posOfOption;
    string[] public options;

    constructor(string[] memory _options) public {
        options = _options;
        votes.length = options.length;

        for (uint i = 0; i < options.length; i++) {
            OptionPos memory option = OptionPos(i, true);
            posOfOption[options[i]] = option;
        }
    }

    function voteCode(uint option) public {
        require(0 <= option && option < options.length, "Invalid option");
        require(!hasVoted[msg.sender], "Desculpe, esta conta já votou.");

        hasVoted[msg.sender] = true;
        votes[option] = votes[option] + 1;
    }

    function voteName(string memory option) public {
        require(!hasVoted[msg.sender], "Desculpe, esta conta já votou.");
        OptionPos memory optionPos = posOfOption[option];
        require(optionPos.exists, "Option does not exist");

        hasVoted[msg.sender] = true;
        votes[optionPos.pos] = votes[optionPos.pos] + 1;
    }

    function getOptions() public view returns (string[] memory) {
        return options;
    }

    function getVotes() public view returns (uint[] memory) {
        return votes;
    }
}