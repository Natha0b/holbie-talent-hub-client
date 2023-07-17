import { User } from "$/app/@unsignedin/(pages)/(log)/login/page";
import { FullProfessionalProfile, ProfessionalProfile } from "./page";

export async function fullProfiles(profiles: ProfessionalProfile[]): Promise<FullProfessionalProfile[]> {
    let completeProfiles: FullProfessionalProfile[] = [];
 
    await Promise.all(profiles.map(async (profile: ProfessionalProfile) => {
        try {
            const {professional_id: _, company_id: __, ...user} = await fetch(`https://165.232.131.33/api/v1/professional_profiles/${profile.profile_id}/user`)
            .then(response => response.json() as Promise<User>);

            completeProfiles.push({
                ...user, ...profile, full_name: `${user.first_name} ${user.last_name}`
            });
        } catch (error) {
            console.error(error);
        }

    }));

    return completeProfiles;
}