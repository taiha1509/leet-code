class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        piles.sort(reverse = True)
        alice_points = 0
        bob_points = 0
        alice_turn = True
        for num in piles:
            if (alice_turn):
                alice_points+=num
            else:
                bob_points+=num
        return alice_points > bob_points