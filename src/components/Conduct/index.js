import conduct from '../../assets/DUST-code-Nov25.jpeg';

const SafetyExpectations = () => {
  const longDesc = `
A poster titled "DUST Code of Conduct" from the Denver Urban Skate Troop (DUST), featuring seven sections on community expectations:

Keep It Positive, Respect Everyone – Emphasizes openness, kindness, and mutual support in a diverse community.
Zero Tolerance for Hate & Violence – States that discrimination, harassment, or bullying have no place at DUST events or online.
Respect Boundaries – Encourages consent, personal space, and avoiding unwelcome or overly personal comments.
Safety First – Reminds skaters to wear protective gear, bring lights, and skate responsibly.
Share the Space – Promotes awareness of others at parks and streets, following leaders’ directions, and sharing room to skate.
Inclusivity Is Key – Encourages participation for skaters of all levels, backgrounds, and identities.
Have Fun & Be You – Invites self-expression and enjoyment while skating.

The poster concludes with a note that it was created "with inspiration from Skate Hunnies LA."
  `;

  return (
    <>
      <figure id="safety" className="my-12">
        <img
          src={conduct}
          alt="DUST Code of Conduct poster"
          aria-describedby="conductdescription"
        />
        {/* Keep caption for semantics; hide visually but keep in the a11y tree */}
        <figcaption id="conductdescription" className="sr-only">
          {longDesc}
        </figcaption>
      </figure>
    </>
  );
};

export default SafetyExpectations;
