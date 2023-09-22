
name!: string;
nick_name?: string;
email_id?: string;
phone_number?: string;
// @Column({default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'})
dob?: Date;
likes ?: string
dislikes ?: string
current_crush ?: string
current_employment_status ?: string
current_relationship_status ?: string
current_education_status ?: string
one_word_about_me ?: string
one_paragraph_about_me ?: string
one_complaint_about_me ?: string
access_to_read_pal_granted!: boolean
access_to_write_pal_granted!: boolean
access_to_write_pal_granted_to!: string
access_to_read_pal_granted_to!: Array<string>