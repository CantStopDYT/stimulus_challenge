namespace StimulusChallenge.API.Models
{
    public class Pledge
    {
        public string Name { get; set; }
        
        public string Email { get; set; }

        public string ZipCode { get; set; }

        public int NonprofitDonation { get; set; }

        public int SmallBizCommitment { get; set; }
    }
}

